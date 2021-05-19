import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import { getAvailableRoutes } from '../../utils/AvailableRoutes';
import { paths } from '../../config/routes';
import { UserContext } from '../../globalContext';

const Routes = () => {
    const user = useContext(UserContext);

    return (
        <Switch>
            {getAvailableRoutes(user?.isAuthenticated, user?.role).map(route => (
                <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
            ))}
            <Route path={paths.notFound} component={NotFound} />
        </Switch>
    );
};

export default Routes;
