import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    margin-top: 30px;
    background: ${props => props.disabled ? '#666' : props.background};
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

const Button = ({ children, disabled, background, onClick }) => (
    <StyledButton
        disabled={disabled}
        background={background}
        onClick={onClick}>
        {children}
    </StyledButton>
);

export default Button;