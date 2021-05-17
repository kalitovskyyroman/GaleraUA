import React from 'react';
import PropTypes from 'prop-types';
import SocialLogoStyles from './style';

const SocialLogo = ({ img, alt, href }) => (
    <a href={href}>
        <SocialLogoStyles src={img} alt={alt} />
    </a>
);

SocialLogo.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default SocialLogo;
