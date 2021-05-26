import paths from '../../../config/paths';

const config = {
    initialValues: {
        email: '',
        password: '',
        userName: '',
    },
    text: {
        submitBtn: 'Log in',
    },
    labels: {
        email: 'Email',
        password: 'Password',
        userName: 'Name',
    },
    login: {
        linkText: 'Already a member? Log in!',
        path: paths.login,
    },
};

export default config;
