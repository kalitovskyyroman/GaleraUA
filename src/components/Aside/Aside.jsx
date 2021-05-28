import React from 'react';
import routes from './AsideConfig';
import Sidebar, { AsideStyledLink } from './styles';
import { getAvailablePaths } from '../../utils/AvailableRoutes';
import useUser from '../../Context/User/userContext';

const Aside = () => {
    const { user } = useUser();

    return (
        <Sidebar>
            {routes
                .filter(route => getAvailablePaths(user?.isAuthenticated, user?.role).includes(route.path))
                .map(({ path, text }) => (
                    <AsideStyledLink key={path} exact to={path}>
                        {text}
                    </AsideStyledLink>
                ))}
        </Sidebar>
    );
};
export default Aside;
