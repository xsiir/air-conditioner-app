import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import CONSTANTS from '../helpers/constants';
import Button from './Button';

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
        const { login } = this.props;
        const requestBody = { nick: inputValue };
        const url = "https://funkcja1.azurewebsites.net/api/HttpTrigger1?code=aHoMxKb/Uuuz53cpypSVOfX8kY/qCs1E/W8S3rNOkuz1Etgd5sBr0A==";
        this.setState({ buttonClicked: true });

        axios.post(url, requestBody).then((response) => {
            console.log(response);
            localStorage.setItem('user', response.data);
            login(response.data.name);
        }).catch((error) => {
            console.log(error)
            alert('Name is not valid.');
            this.setState({ buttonClicked: false });
        });
    }

    render() {
        const { buttonClicked, inputValue } = this.state;

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

export default LoginComponent;