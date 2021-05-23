import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import Styledlabel, { StyledError } from './styles';

const InputUnderline = ({ label, validate, ...props }) => {
    const [field, meta] = useField({ ...props, validate });
    return (
        <>
            <Styledlabel placeholder={label} autoComplete='off' {...field} {...props} />

            {meta.touched && meta.error ? <StyledError className='error'>{meta.error}</StyledError> : null}
        </>
    );
};

InputUnderline.propTypes = { label: PropTypes.string.isRequired, validate: PropTypes.func.isRequired };

export default InputUnderline;
