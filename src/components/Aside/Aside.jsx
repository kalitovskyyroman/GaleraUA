import React, { useContext } from 'react';
import routes from './AsideConfig';
import Sidebar, { StyledLink } from './styles';
import { getAvailablePaths } from '../../utils/AvailableRoutes';
import { UserContext } from '../../globalContext';

const Aside = () => {
    const user = useContext(UserContext);

    return (
        <Sidebar>
            {routes
                .filter(route => getAvailablePaths(user?.is_authenticated, user?.role).includes(route.path))
                .map(route => (
                    <StyledLink key={route.path} exact to={route.path}>
                        {route.text}
                    </StyledLink>
                ))}
        </Sidebar>
    );
};
export default Aside;
