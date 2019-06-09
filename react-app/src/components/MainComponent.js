import React, { Component } from "react";
import { fetchState } from "../actions/airActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    margin-top: 30px;
    background: ${props => props.off ? '#dc143c' : '#90ee90'};
    border: 0;
    height: 50px;
    border-radius: 15px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    &:active {
        background: ${props => props.off ? '#ba021a' : '#70cc70'};
    }
`;

class MainComponent extends Component {
    state = {
        airState: ""
    };

    componentDidMount() {
       this.props.fetchState();
    }

    render() {
        return (
            <Container>
                <Button>TURN ON</Button>
                <Button off>TURN OFF</Button>
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
