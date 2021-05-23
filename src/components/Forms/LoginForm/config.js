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
        text: 'Not a member?',
        linkText: ' Signup now!',
        path: paths.signup,
    },
};

export default config;
