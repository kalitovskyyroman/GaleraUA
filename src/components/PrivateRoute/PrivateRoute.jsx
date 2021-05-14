import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { paths } from '../../config/routers';

const PrivateRoute = ({ user, ...rest }) =>
    user.is_authenticated ? <Route {...rest} /> : <Redirect to={paths.login} />;

PrivateRoute.propTypes = { user: PropTypes.shape({ is_authenticated: PropTypes.bool }).isRequired };

export default PrivateRoute;
