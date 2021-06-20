import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styles';

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

Title.defaultProps = { children: '' };

Title.propTypes = { children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]) };

export default React.memo(Title);
