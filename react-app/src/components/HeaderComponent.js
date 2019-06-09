import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: #ccc;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    color: #333;
`;

const Logout = styled.button`
    color: #333;
    display: ${props => props.userLogged ? 'unset' : 'none'};
`;

const Header = ({ userLogged, logout }) => (
    <Container>
        <Title>
            Air Conditioner
        </Title>
        <Logout
            userLogged={userLogged}
            onClick={() => logout(false)}
        >
            Wyloguj
        </Logout>
    </Container>
);

export default Header;
