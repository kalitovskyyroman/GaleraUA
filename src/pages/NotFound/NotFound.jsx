import React, { useEffect } from 'react';
import StyledNotFoundContainer, { StyledNotFound, StyledLogo } from './styles';
import config from './config';

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledNotFoundContainer>
            <StyledNotFound>
                <StyledLogo src={config.logo} />
                <span>
                    {config.code} {config.text}
                </span>
            </StyledNotFound>
        </StyledNotFoundContainer>
    );
};
export default NotFound;
