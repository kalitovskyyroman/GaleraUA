import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import config from './config';
import { validateEmail, validatePassword } from '../../../utils/valitators';
import InputUnderline from '../../Inputs/InputUnderline/InputUnderline';
import StyledForm, { ButtonWrapper } from './styles';
import Button from '../../Button/Button';
import StyledLinkComponent from '../../StyledLink/StyledLink';

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

    const onSubmit = data => console.log('Data: ', data);

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
