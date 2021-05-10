import React from 'react';
import PropTypes from 'prop-types';
import { TitleWrapper, StyledTitle } from './styles';

const Title = ({ children }) => (
    <TitleWrapper>
        <StyledTitle>{children}</StyledTitle>
    </TitleWrapper>
);

Title.defaultProps = { children: '' };

Title.propTypes = { children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]) };

export default Title;
