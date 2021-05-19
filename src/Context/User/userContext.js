import React from 'react';
import PropTypes from 'prop-types';
import roles from '../../config/roles';

const initialState = { isAuthenticated: true, role: roles.ADMIN };

export const UserContext = React.createContext(initialState);

export const UserProvider = ({ children }) => (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
);

UserProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
