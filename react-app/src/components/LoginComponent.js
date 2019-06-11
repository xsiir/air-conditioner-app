import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { bindActionCreators } from "redux";
import Button from './Button';
import { connect } from "react-redux";
import {login} from "../actions/userActions";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin-top: 30px;
    font-size: 18px;
    border: 0;
    border-bottom: 1px solid #333;
    padding-bottom: 8px;
`;

class LoginComponent extends React.Component {
    state = {
        inputValue: '',
        buttonClicked: false
    };

    updateInputValue(event) {
        this.setState({ inputValue: event.target.value });
    }

    onButtonClick() {
        const { inputValue } = this.state;
        this.props.login(inputValue);
    }

    render() {
        const { buttonClicked, inputValue } = this.state;
        const name = this.props.name;
        if(name && name!=""){
            alert(name);
        }
        console.log(name);
        return (
            <Container>
                <Input
                    type="text"
                    placeholder="Your name"
                    value={inputValue}
                    onChange={(event) => this.updateInputValue(event)}
                />
                {buttonClicked ? (
                    <Button disabled>
                        LOG IN
                    </Button>
                ) : (
                    <Button
                        background='#90ee90'
                        onClick={() => this.onButtonClick()}
                    >
                        LOG IN
                    </Button>
                )}
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    name: state.name
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    login: login
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);