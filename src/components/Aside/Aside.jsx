import React from 'react';
import routes from './AsideConfig';
import Sidebar, { StyledLink } from './styles';

const Aside = () => (
    <Sidebar>
        {routes.map(route => (
            <StyledLink key={route.path} exact to={route.path}>
                {route.text}
            </StyledLink>
        ))}
    </Sidebar>
);
export default Aside;
