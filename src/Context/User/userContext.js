import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import roles from '../../config/roles';

export const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [role, setRole] = useState(roles.ADMIN);

    const [data, setUserData] = useState({});

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

const useUser = () => useContext(UserContext);

UserProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default useUser;
