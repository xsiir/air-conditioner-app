import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    font-size: 18px;
    border: 0;
    border-bottom: 1px solid #333;
    padding-bottom: 8px;
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