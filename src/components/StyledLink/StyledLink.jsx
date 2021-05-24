import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './styles';

const StyledLinkComponent = ({ children, ...props }) => <StyledLink {...props}>{children}</StyledLink>;

StyledLinkComponent.propTypes = { children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired };

export default StyledLinkComponent;
