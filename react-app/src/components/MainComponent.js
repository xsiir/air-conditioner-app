import React, { Component } from "react";
import { fetchState } from "../actions/airActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';
//import axios from 'axios';
import * as signalR from '@aspnet/signalr';

import CONSTANTS from '../helpers/constants';
import Button from './Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

class MainComponent extends Component {
    state = {
        airState: "",
        buttonClicked: false
    };

    componentDidMount() {
       this.props.fetchState();
    }

    switchConditionerState(state) {
        // const requestBody = { state };
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': localStorage.getItem('user')
        //     }
        // };
        // this.setState({ buttonClicked: true });

        // axios.post(
        //     `${CONSTANTS.BACKEND_URL}/conditioner/switch`,
        //     requestBody,
        //     config
        // ).then((response) => {
        //     alert(response.data.message);
        // }).catch(() => {
        //     alert('You have to be inside.');
        // }).finally(() => this.setState({ buttonClicked: false }));
        let connection = new signalR.HubConnectionBuilder()
        .withUrl("/chat")
        .build();
 
        connection.on("ChangeStateMessage", data => {
            alert(data);
            this.setState({ buttonClicked: false });
        });
 
        connection.start().then(() => connection.invoke("ChangeStateMessage", state));
    }

    render() {
        const { buttonClicked } = this.state;
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
