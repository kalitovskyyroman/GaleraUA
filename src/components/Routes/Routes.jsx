import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import getAvailableRoutes, { getPublicRoutes } from '../../utils/AvailableRoutes';
import { paths } from '../../config/routes';

const Routes = () => {
    const user = JSON.parse(localStorage.getItem('User'));

    return (
        <Switch>
            {!user?.is_authenticated
                ? getPublicRoutes().map(route => (
                      <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                  ))
                : getAvailableRoutes(user.role).map(route => (
                      <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                  ))}
            <Route path={paths.notFound} component={NotFound} />
        </Switch>
    );
};

export default Routes;
