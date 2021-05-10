import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

const Button = props => <StyledButton {...props} />;

Button.defaultProps = { children: '' };

Button.propTypes = { children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]) };

export default Button;
