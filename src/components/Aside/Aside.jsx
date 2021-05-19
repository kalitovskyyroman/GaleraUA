import React from 'react';
import routes from './AsideConfig';
import Sidebar, { StyledLink } from './styles';
import { getAvailablePaths } from '../../utils/AvailableRoutes';
import { useUserState } from '../../Context/User/userContext';

const Aside = () => {
    const user = useUserState();

    return (
        <Sidebar>
            {routes
                .filter(route => getAvailablePaths(user?.isAuthenticated, user?.role).includes(route.path))
                .map(route => (
                    <StyledLink key={route.path} exact to={route.path}>
                        {route.text}
                    </StyledLink>
                ))}
        </Sidebar>
    );
};
export default Aside;
