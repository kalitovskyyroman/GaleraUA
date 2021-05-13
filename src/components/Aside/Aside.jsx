import { NavLink } from 'react-router-dom';
import React from 'react';
import routes from './AsideConfig';

const Aside = () => (
    <>
        {routes.map(route => (
            <NavLink key={route.path} exact to={route.path}>
                {route.text}
            </NavLink>
        ))}
    </>
);
export default Aside;
