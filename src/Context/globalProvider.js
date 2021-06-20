import React from 'react';
import PropTypes from 'prop-types';
import { UserProvider } from './User/userContext';

const GlobalContext = React.createContext({});

const GlobalProvider = ({ children }) => (
    <GlobalContext.Provider value={{}}>
        <UserProvider>{children}</UserProvider>
    </GlobalContext.Provider>
);

GlobalProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default GlobalProvider;
