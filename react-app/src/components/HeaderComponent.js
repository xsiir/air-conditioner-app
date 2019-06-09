import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: #ccc;
`;

const Wrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    max-width: 400px;
`;

const Title = styled.h1`
    font-size: 24px;
    color: #333;
    @media (min-width: 481px) {
        font-size: 32px;
    }
`;

const Logout = styled.button`
    color: #333;
    display: ${props => props.userLogged ? 'unset' : 'none'};
    border: 0;
    background: transparent;
    font-size: 18px;
    cursor: pointer;
`;

const Header = ({ userLogged, logout }) => (
    <Container>
        <Wrapper>
            <Title>
                Air Conditioner
            </Title>
            <Logout
                userLogged={userLogged}
                onClick={() => logout(false)}
            >
                Wyloguj
            </Logout>
        </Wrapper>
    </Container>
);

export default Header;
