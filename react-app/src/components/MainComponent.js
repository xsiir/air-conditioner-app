import React, { Component } from "react";
import { fetchState } from "../actions/airActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

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

    turnOnConditioner() {
        this.setState({ buttonClicked: true });
    }

    turnOffConditioner() {
        this.setState({ buttonClicked: true });
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
                    onClick={() => this.turnOnConditioner()}
                >
                    TURN ON
                </Button>
                <Button
                    background="#dc143c"
                    onClick={() => this.turnOffConditioner()}
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
