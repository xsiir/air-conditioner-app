import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    font-size: 18px;
    border: 0;
    border-bottom: 1px solid #333;
    margin: 30px 0;
    padding-bottom: 8px;
`;

const Button = styled.button`
    background: ${props => props.disabled ? '#666' : '#90ee90'};
    border: 0;
    height: 50px;
    border-radius: 15px;
    font-size: 18px;
    color: ${props => props.disabled ? '#aaa' : '#fff'};
    cursor: ${props => props.disabled ? 'wait' : 'pointer'};
    font-weight: 700;
    &:active {
        background: #70cc70;
    }
`;

class LoginComponent extends React.Component {
    state = {
        buttonClicked: false
    };

    onButtonClick() {
        this.setState({ buttonClicked: true });
        this.props.login(true);
    }

    render() {
        const { buttonClicked } = this.state;

        return (
            <Container>
                <Input type="text" placeholder="Your name" />
                {buttonClicked ? (
                    <Button disabled>
                        LOG IN
                    </Button>
                ) : (
                    <Button onClick={() => this.onButtonClick()}>
                        LOG IN
                    </Button>
                )}
            </Container>
        );
    }
}

export default LoginComponent;