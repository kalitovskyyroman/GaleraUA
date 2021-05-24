import React from 'react';
import { Formik } from 'formik';
import config from './config';
import { validateEmail, validatePassword } from '../../../utils/valitators';
import InputUnderline from '../../Inputs/InputUnderline/InputUnderline';
import StyledForm, { ButtonWrapper } from './styles';
import Button from '../../Button/Button';
import StyledLinkComponent from '../../StyledLink/StyledLink';

const LoginForm = () => (
    <Formik
        initialValues={{
            email: config.initialValues.email,
            password: config.initialValues.password,
        }}
        onSubmit={values => {
            console.log(values);
        }}
    >
        {({ values, isValid, dirty }) => (
            <StyledForm>
                <InputUnderline
                    label={config.labels.email}
                    value={values.email}
                    name='email'
                    validate={validateEmail}
                />
                <InputUnderline
                    label={config.labels.password}
                    value={values.password}
                    name='password'
                    validate={validatePassword}
                />
                <span>
                    <StyledLinkComponent to='/signup'>{config.signup.linkText}</StyledLinkComponent>
                </span>

                <ButtonWrapper>
                    <Button type='submit' mode='primary' disabled={!(isValid && dirty)}>
                        {config.text.submitBtn}
                    </Button>
                </ButtonWrapper>
            </StyledForm>
        )}
    </Formik>
);

export default LoginForm;
