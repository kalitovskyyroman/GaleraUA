/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import config from './config';
import { validateEmail, validatePassword, validateUserName } from '../../../utils/valitators';
import InputUnderline from '../../Inputs/InputUnderline/InputUnderline';
import StyledForm, { ButtonWrapper, StyledDropZone, StyledDropZoneFill, StyledInput } from './styles';
import Button from '../../Button/Button';
import StyledLinkComponent from '../../StyledLink/StyledLink';

const schema = yup.object().shape({
    email: validateEmail(),
    password: validatePassword(),
    userName: validateUserName(),
});

const dragAndDropFile = (fieldName, register, setValue, getValues) => {
    const [drag, setDrag] = useState(false);
    const [imgPreview, setImgPreview] = useState(null);

    function dragStartHandler(e) {
        e.preventDefault();
        setDrag(true);
    }

    function dragLeaveHandler(e) {
        e.preventDefault();
        setDrag(false);
    }

    const setImage = e => {
        setValue('file', e.dataTransfer.files);
        setImgPreview(URL.createObjectURL(e.dataTransfer.files[0]));
    };

    function onDropHandler(e) {
        e.preventDefault();
        setDrag(false);
        e.dataTransfer.files[0].type.startsWith('image/') ? setImage(e) : setValue('file', null);
    }

    function onCkick(e) {
        console.log('1');
    }

    function onChange(e) {
        // e.preventDefault();
        console.log('change');
    }

    return (
        <>
            <StyledInput
                type='file'
                onChange={e => onChange(e)}
                accept='image/*'
                {...register(fieldName)}
                id='upload'
            />
            {drag ? (
                <StyledDropZoneFill
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    htmlFor='upload'
                    onDrop={e => onDropHandler(e)}
                    onChange={e => onChange(e)}
                >
                    Drop photo
                </StyledDropZoneFill>
            ) : (
                <StyledDropZone
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onClick={e => onCkick(e)}
                    onChange={e => onChange(e)}
                    imgSrc={imgPreview}
                    htmlFor='upload'
                >
                    Drag proto
                </StyledDropZone>
            )}
        </>
    );
};

const SignupForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,

        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
        defaultValues: {
            username: config.initialValues.userName,
            email: config.initialValues.email,
            password: config.initialValues.password,
            file: null,
        },
    });

    const onSubmit = data => console.log('Data: ', data);

    const testClick = () => console.log(getValues());

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
                {dragAndDropFile('file', register, setValue, getValues)}

                <span>
                    <StyledLinkComponent to={config.login.path}>{config.login.linkText}</StyledLinkComponent>
                </span>
                {/* {drag ? (
                    <StyledDropZoneFill
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                    />
                ) : (
                    <StyledDropZone
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onClick={e => onClickHandler(e)}
                    />
                )} */}

                <ButtonWrapper>
                    <Button type='submit' mode='primary' disabled={!isValid}>
                        {config.text.submitBtn}
                    </Button>
                    <Button onClick={testClick} mode='primary'>
                        {config.text.submitBtn}
                    </Button>
                </ButtonWrapper>
            </StyledForm>
        </>
    );
};

export default SignupForm;
