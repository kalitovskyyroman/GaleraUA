import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import StyledInput from './styles';

const InputUnderline = ({ label, validate, ...props }) => {
    const [field, meta] = useField({ ...props, validate });
    return (
        <>
            <StyledInput>
                {label}
                <input {...field} {...props} />
            </StyledInput>
            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
        </>
    );
};

InputUnderline.propTypes = { label: PropTypes.string.isRequired, validate: PropTypes.func.isRequired };

export default InputUnderline;
