import React from 'react';
import PropTypes from 'prop-types';
import SocialLogoStyles from './style';

const SocialLogo = ({ img, ref }) => (
    <a href={ref}>
        <SocialLogoStyles src={img} />
    </a>
);

SocialLogo.propTypes = { img: PropTypes.string.isRequired, ref: PropTypes.string.isRequired };

export default SocialLogo;
