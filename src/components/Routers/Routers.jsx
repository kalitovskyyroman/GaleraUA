import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import getAvailableRouters, { getPublicRouters } from '../../utils/AvailableRouters';

const Routers = () => {
    const user = JSON.parse(localStorage.getItem('User'));

    return (
        <Switch>
            {!user || !user.is_authenticated
                ? getPublicRouters().map(route => (
                      <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                  ))
                : getAvailableRouters(user.role).map(route => (
                      <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                  ))}
            <Route path='*' component={NotFound} />
        </Switch>
    );
};

export default Routers;
