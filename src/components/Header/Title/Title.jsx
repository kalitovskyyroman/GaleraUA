import React from 'react';
import PropTypes from 'prop-types';
import { TitleWrapper, StyledTitle } from './styles';

const Title = ({ children }) => (
    <TitleWrapper>
        <StyledTitle>{children}</StyledTitle>
    </TitleWrapper>
);

Title.propTypes = { children: PropTypes.element.isRequired };

export default Title;
