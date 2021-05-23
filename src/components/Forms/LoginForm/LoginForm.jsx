/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import config from './config';
import { validateEmail, validatePassword } from '../../../utils/valitators';
import InputUnderline from '../../Inputs/InputUnderline/InputUnderline';
import StyledField from './styles';

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
            <Form>
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

                <button type='submit' mode='primary' disabled={!(isValid && dirty)}>
                    {config.text.submitBtn}
                </button>
            </Form>
        )}
    </Formik>
);

export default LoginForm;
