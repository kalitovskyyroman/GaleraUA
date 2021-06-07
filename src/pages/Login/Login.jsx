import React, { useEffect } from 'react';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import StyledLoginContainer from './styles';

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledLoginContainer>
            <LoginForm />
        </StyledLoginContainer>
    );
};

export default Login;
