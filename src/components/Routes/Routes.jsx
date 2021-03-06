import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import { getAvailableRoutes } from '../../utils/AvailableRoutes';
import paths from '../../config/paths';
import useUser from '../../Context/User/userContext';

const Routes = () => {
    const { user } = useUser();

    return (
        <Switch>
            {getAvailableRoutes(user?.isAuthenticated, user?.role).map(({ path, component, exact }) => (
                <Route key={path} path={path} component={component} exact={exact} />
            ))}
            <Route path={paths.notFound} component={NotFound} />
        </Switch>
    );
};

export default Routes;
