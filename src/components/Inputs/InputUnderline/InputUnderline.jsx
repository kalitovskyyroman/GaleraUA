import React from 'react';
import PropTypes from 'prop-types';
import Styledlabel, { StyledError } from './styles';

const InputUnderline = ({ label, fieldName, register, error }) => (
    <>
        <Styledlabel placeholder={label} autoComplete='off' {...register(fieldName)} />

        {error ? <StyledError className='error'>{error}</StyledError> : null}
    </>
);

InputUnderline.defaultProps = {
    error: '',
};

InputUnderline.propTypes = {
    label: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default InputUnderline;
