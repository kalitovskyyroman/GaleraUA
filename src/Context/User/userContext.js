import React from 'react';
import PropTypes from 'prop-types';
import user from './User';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => <UserContext.Provider value={user}>{children}</UserContext.Provider>;

UserProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
