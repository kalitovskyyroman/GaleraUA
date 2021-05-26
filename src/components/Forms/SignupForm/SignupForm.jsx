import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import config from './config';
import { validateEmail, validatePassword, validateUserName } from '../../../utils/valitators';
import InputUnderline from '../../Inputs/InputUnderline/InputUnderline';
import DragAndDrop from '../../Inputs/DragAndDrop/DragAndDrop';
import StyledForm, { ButtonWrapper } from './styles';
import Button from '../../Button/Button';
import StyledLinkComponent from '../../StyledLink/StyledLink';

const schema = yup.object().shape({
    email: validateEmail(),
    password: validatePassword(),
    userName: validateUserName(),
});

const SignupForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
        defaultValues: {
            userName: config.initialValues.userName,
            email: config.initialValues.email,
            password: config.initialValues.password,
            file: null,
        },
    });

    const onSubmit = data => console.log('Data: ', data);

    return (
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <InputUnderline
                    label={config.labels.userName}
                    fieldName='userName'
                    register={register}
                    error={errors.userName?.message}
                />
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
                />
                <DragAndDrop fieldName='file' register={register} setValue={setValue} fileType='image' />

                <span>
                    <StyledLinkComponent to={config.login.path}>{config.login.linkText}</StyledLinkComponent>
                </span>

                <ButtonWrapper>
                    <Button type='submit' mode='primary' disabled={!isValid}>
                        {config.text.submitBtn}
                    </Button>
                </ButtonWrapper>
            </StyledForm>
        </>
    );
};

export default SignupForm;
