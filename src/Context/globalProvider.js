import React from 'react';
import PropTypes from 'prop-types';
import { UserProvider } from './User/userContext';
import { LoaderProvider } from './Loader/LoaderContext';

const GlobalContext = React.createContext({});

const GlobalProvider = ({ children }) => (
    <GlobalContext.Provider value={{}}>
        <UserProvider>
            <LoaderProvider>{children}</LoaderProvider>
        </UserProvider>
    </GlobalContext.Provider>
);

GlobalProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default GlobalProvider;
