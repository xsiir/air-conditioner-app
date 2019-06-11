import React, { Component } from "react";
import { fetchState } from "../actions/airActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';
import axios from 'axios';
import * as signalR from '@aspnet/signalr';

import Button from './Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Dot = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: ${props => props.off ? '#ff0000' : '#00ff00'}
`;

class MainComponent extends Component {
    state = {
        airState: "",
        buttonClicked: false,
        connection: null,
        message: null
    };

    componentWillMount() {
        const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://projekthub.azurewebsites.net/air-conditioner")
        .build();
        connection.start();

        this.setState({
            connection
        });
    }

    componentDidMount() {
       this.props.fetchState();
    }

    switchConditionerState(state) {
        const requestBody = { nick: localStorage.getItem('user') };
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('user')
            }
        };
        const url = "https://funkcja1.azurewebsites.net/api/HttpTrigger1?code=aHoMxKb/Uuuz53cpypSVOfX8kY/qCs1E/W8S3rNOkuz1Etgd5sBr0A==";
        this.setState({ buttonClicked: true });

        axios.post(url, requestBody, config).then((response) => {
            if (response.data.data.recordset.length > 0) {
                if (response.data.data.recordset[0].isInside) {
                    this.sendSignalrData(state);
                } else {
                    alert('You have to be inside.');
                    this.setState({ buttonClicked: false })
                }
            } else {
                alert('Your session expired. Please log in again.');
                this.setState({ buttonClicked: false })
            }
        }).catch((error) => {
            console.log(error);
            this.setState({ buttonClicked: false })
        });
    }

    sendSignalrData(state) {
        const { connection } = this.state;
        connection.on("ChangeStateMessage", data => {
            data === 1 ? this.setState({ message: 'ON' }) : this.setState({ message: 'OFF' });
            this.setState({ buttonClicked: false });
        });
 
        connection.invoke("ChangeStateMessage", state);
    }

    render() {
        const { buttonClicked, message } = this.state;
        const { username } = this.props;
        return buttonClicked ? (
            <Container>
                <small>Zalogowany jako: {username}</small>
                <Button disabled>TURN ON</Button>
                <Button disabled>TURN OFF</Button>
            </Container>
        ) : (
            <Container>
                <small>Zalogowany jako: {username}</small>
                <Button
                    background="#90ee90"
                    onClick={() => this.switchConditionerState(1)}
                >
                    TURN ON
                </Button>
                <Button
                    background="#dc143c"
                    onClick={() => this.switchConditionerState(0)}
                >
                    TURN OFF
                </Button>
                <br />
                {message === 'ON' && (<>State: <Dot on /></>)}
                {message === 'OFF' && (<>State: <Dot off /></>)}
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    airState: state.airState
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchState: fetchState
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
