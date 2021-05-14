import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routers from '../../config/routers';

const PublicRouters = () => (
    <Switch>
        {routers.map(
            route =>
                !route.is_protected && (
                    <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                ),
        )}
    </Switch>
);

export default PublicRouters;
