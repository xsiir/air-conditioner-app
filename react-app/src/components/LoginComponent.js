import React from 'react';

const LoginComponent = ({ login }) => (
    <button onClick={() => login(true)}>
        LOG IN
    </button>
);

export default LoginComponent;