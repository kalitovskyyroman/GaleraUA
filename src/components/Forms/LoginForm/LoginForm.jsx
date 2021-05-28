import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import config from './config';
import paths from '../../../config/paths';
import { validateEmail, validatePassword } from '../../../utils/valitators';
import InputUnderline from '../../Inputs/InputUnderline/InputUnderline';
import StyledForm, { ButtonWrapper } from './styles';
import Button from '../../Button/Button';
import StyledLinkComponent from '../../StyledLink/StyledLink';

import useUser from '../../../hooks/useUser';

const schema = yup.object().shape({
    email: validateEmail(),
    password: validatePassword(),
});

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
        defaultValues: {
            email: config.initialValues.email,
            password: config.initialValues.password,
        },
    });

    const history = useHistory();

    const { setUserData, setIsAuthenticated } = useUser();

    const onSubmit = data => {
        setIsAuthenticated(true);
        setUserData({
            email: data.email,
            password: data.password,
        });
        history.push(paths.home);
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputUnderline
                label={config.labels.email}
                fieldName='email'
                register={register}
                error={errors.email?.message}
            />
            <InputUnderline
                label={config.labels.password}
                fieldName='password'
                register={register}
                error={errors.password?.message}
                type='password'
            />

            <span>
                <StyledLinkComponent to={config.signup.path}>{config.signup.linkText}</StyledLinkComponent>
            </span>

            <ButtonWrapper>
                <Button type='submit' mode='primary' disabled={!isValid}>
                    {config.text.submitBtn}
                </Button>
            </ButtonWrapper>
        </StyledForm>
    );
};

export default LoginForm;
