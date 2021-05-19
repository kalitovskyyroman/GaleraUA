import React from 'react';
import StyledNotFoundContainer, { StyledNotFound, StyledLogo } from './styles';
import config from './config';

const NotFound = () => (
    <StyledNotFoundContainer>
        <StyledNotFound>
            <StyledLogo src={config.logo} />
            <span>
                {config.code} {config.text}
            </span>
        </StyledNotFound>
    </StyledNotFoundContainer>
);
export default NotFound;
