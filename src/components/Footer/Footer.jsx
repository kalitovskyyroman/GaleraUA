import React from 'react';
import StyledFooter, { FooterText } from './style';
import config from './config';
import Title from '../Header/Title/Title';
import SocialLogos from './SocialLogos/SocialLogos';

const Footer = () => (
    <StyledFooter>
        <Title>{config.title}</Title>
        <FooterText children={config.center_text} />
        <SocialLogos />
    </StyledFooter>
);

export default Footer;
