import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const LoaderContext = React.createContext(false);

export const LoaderProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return <LoaderContext.Provider value={{ loading, setLoading }}>{children}</LoaderContext.Provider>;
};

const useLoader = () => useContext(LoaderContext);

LoaderProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default useLoader;
