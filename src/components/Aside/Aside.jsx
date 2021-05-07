import { NavLink } from 'react-router-dom';
import React from 'react';
import routes from './AsideConfig.json';

import grid from '../../App.module.css';

const Aside = () => (
    <aside className={grid.grid_aside}>
        {routes.map(route => (
            <NavLink key={route.path} exact to={route.path}>
                {route.text}
            </NavLink>
        ))}
    </aside>
);
export default Aside;
