/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import config from './config';
import { validateEmail, validatePassword } from '../../../utils/valitators';
import StyledField from './styles';
// import Button from '../../Button/Button';

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);

    const [error, setError] = useState('');

    return {
        value,
        onChange: e => {
            setValue(e.target.value);
            !!validator(e.target.value) ? setError(validator(e.target.value)) : setError('');
        },
        error,
    };
};

const LoginForm = () => {
    const email = useInput(config.initialValues.email, validateEmail);
    const password = useInput(config.initialValues.password, validatePassword);
    const [disable, setDisable] = useState(true);

    const submit = () => {
        console.log('email: ', email.value);
        console.log('psw: ', password.value);
    };

    const fromChange = () => {
        console.log(email.error);
        console.log(password.error);
        email.error || password.error ? setDisable(true) : setDisable(false);
    };

    const t = e => {
        password.onChange(e);
        email.error || password.error ? setDisable(true) : setDisable(false);
    };

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                e.stopPropagation();
                submit();
            }}
            onChange={fromChange}
        >
            <StyledField value={email.value} onFocus={email.onChange} onChange={email.onChange} type='text' />
            {email.error}
            <StyledField value={password.value} onFocus={password.onChange} onChange={t} type='text' />
            {password.error}
            <button type='submit' mode='primary' disabled={disable}>
                {config.text.submitBtn}
            </button>
        </form>
    );

    // return (
    //     <Formik
    //         initialValues={{
    //             email: email,
    //             password: password,
    //         }}
    //         onSubmit={values => {
    //             console.log(values);
    //             console.log(email);
    //             console.log(password);
    //         }}
    //     >
    //         {({ errors, touched, isValid, dirty }) => (
    //             <Form>
    //                 <StyledField
    //                     name='email'
    //                     value={email}
    //                     onChange={e => setEmail(e.target.value)}
    //                     validate={() => validateEmail(email)}
    //                 />
    //                 {errors.email && touched.email && <div>{errors.email}</div>}

    //                 <StyledField
    //                     name='password'
    //                     value={password}
    //                     onChange={e => setPassword(e.target.value)}
    //                     validate={() => validatePassword(password)}
    //                 />
    //                 {errors.password && touched.password && <div>{errors.password}</div>}

    //                 {console.log(dirty)}
    //                 <button type='submit' mode='primary' disabled={!isValid}>
    //                     {config.text.submitBtn}
    //                 </button>
    //             </Form>
    //         )}
    //     </Formik>
    // );
};

export default LoginForm;
