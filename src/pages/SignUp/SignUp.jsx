import React, { useEffect } from 'react';
import StyledSignupContainer from './styles';
import SignupForm from '../../components/Forms/SignupForm/SignupForm';

const Signup = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledSignupContainer>
            <SignupForm />
        </StyledSignupContainer>
    );
};
export default Signup;
