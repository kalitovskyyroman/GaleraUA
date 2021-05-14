import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import routers from '../../config/routers';

const ProtectedRouters = ({ permission }) => (
    <Switch>
        {routers.map(
            route =>
                route.permissions &&
                route.permissions.includes(permission) && (
                    <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                ),
        )}
    </Switch>
);

ProtectedRouters.propTypes = { permission: PropTypes.string.isRequired };

export default ProtectedRouters;
