import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const LoaderContext = React.createContext(false);

export const LoaderProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const errInterceptor = err => {
            setLoading(false);
            Promise.reject(err);
        };

        axios.interceptors.request.use(
            request => {
                setLoading(true);
                return request;
            },
            err => errInterceptor(err),
        );

        axios.interceptors.response.use(
            response => {
                setLoading(false);
                return response;
            },
            err => errInterceptor(err),
        );
    }, []);

    return <LoaderContext.Provider value={{ loading, setLoading }}>{children}</LoaderContext.Provider>;
};

const useLoader = () => useContext(LoaderContext);

LoaderProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default useLoader;
