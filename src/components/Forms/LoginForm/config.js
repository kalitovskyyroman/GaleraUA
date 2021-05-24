import paths from '../../../config/paths';

const config = {
    initialValues: {
        email: '',
        password: '',
    },
    text: {
        submitBtn: 'Log in',
    },
    labels: {
        email: 'Email',
        password: 'Password',
    },
    signup: {
        linkText: 'Not a member? Signup now!',
        path: paths.signup,
    },
};

export default config;
