import React from 'react';
import StyledFooter, { FooterText } from './style';
import text from './config.json';
import Title from '../Header/Title/Title';
import SocialLogos from './SocialLogos/SocialLogos';

const Footer = () => (
    <StyledFooter>
        <Title>{text.title}</Title>
        <FooterText children={text.center_text} />
        <SocialLogos />
    </StyledFooter>
);

export default Footer;
