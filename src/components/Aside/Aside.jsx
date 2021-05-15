import { NavLink } from 'react-router-dom';
import React from 'react';
import routes from './AsideConfig';
import Sidebar from './styles';

const Aside = () => (
    <Sidebar>
        {routes.map(route => (
            <NavLink key={route.path} exact to={route.path}>
                {route.text}
            </NavLink>
        ))}
    </Sidebar>
);
export default Aside;
