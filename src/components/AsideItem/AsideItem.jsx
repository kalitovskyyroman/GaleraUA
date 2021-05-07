import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const AsideItem = ({ text, path }) => (
    <NavLink exact to={path}>
        {text}
    </NavLink>
);

AsideItem.defaultProps = {
    path: '/',
    text: '',
};

AsideItem.propTypes = {
    text: PropTypes.string,
    path: PropTypes.string,
};

export default AsideItem;
