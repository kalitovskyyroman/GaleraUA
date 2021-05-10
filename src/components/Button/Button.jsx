import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

Button.propTypes = { children: PropTypes.element.isRequired };

export default Button;
