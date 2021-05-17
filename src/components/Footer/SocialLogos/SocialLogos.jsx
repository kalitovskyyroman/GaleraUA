import React from 'react';
import SocialLogo from './SocialLogo/SocialLogo';
import imgs from './config';
import SocialLogosStyles from './style';

const SocialLogos = () => (
    <SocialLogosStyles>
        {imgs.map(img => (
            <SocialLogo key={img.ref} img={img.logo} alt={img.alt} href={img.ref} />
        ))}
    </SocialLogosStyles>
);

export default SocialLogos;
