import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const LoaderContext = React.createContext(false);

export const LoaderProvider = ({ children }) => {
    const [requestsCount, setRequestsCount] = useState(0);

    useEffect(() => {
        const errInterceptor = err => {
            setRequestsCount(requestsCount => requestsCount - 1);
            Promise.reject(err);
        };

        axios.interceptors.request.use(
            request => {
                setRequestsCount(requestsCount => requestsCount + 1);
                return request;
            },
            err => errInterceptor(err),
        );

        axios.interceptors.response.use(
            response => {
                setRequestsCount(requestsCount => requestsCount - 1);
                return response;
            },
            err => errInterceptor(err),
        );
    }, []);

    return <LoaderContext.Provider value={{ requestsCount }}>{children}</LoaderContext.Provider>;
};

const useLoader = () => useContext(LoaderContext);

LoaderProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default useLoader;
