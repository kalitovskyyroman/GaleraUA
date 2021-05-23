import React from 'react';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import config from './config';
import { validateEmail, validatePassword } from '../../../utils/valitators';
import InputUnderline from '../../Inputs/InputUnderline/InputUnderline';
import StyledForm, { ButtonWrapper } from './styles';
import Button from '../../Button/Button';

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
                    {config.signup.text}
                    <NavLink to='/signup'>{config.signup.linkText}</NavLink>
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
