import * as yup from 'yup';

export const validateEmail = () => yup.string().required('Email is required').email('Invalid email');

export const validatePassword = () =>
    yup.string().trim().required('Password is required').min(5, 'Password must be at least 5 characters');
