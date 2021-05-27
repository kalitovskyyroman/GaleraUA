import React, { useState } from 'react';
import PropTypes from 'prop-types';
import roles from '../../config/roles';

const [isAuthenticated, setIsAuthenticated] = useState(false);

const [role, setRole] = useState(roles.ADMIN);

const [data, setUserData] = useState({});

export const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
    const user = {
        role: role,
        isAuthenticated: isAuthenticated,
        data: { ...data },
    };

    return (
        <UserContext.Provider value={{ user, setUserData, setIsAuthenticated, setRole }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
