import axios from 'axios';

const useInterceptor = (requestAction, responseAction, errorAction) => {
    const request = axios.interceptors.request.use(
        request => {
            requestAction();
            return request;
        },
        error => {
            errorAction();
            Promise.reject(error);
        },
    );

    const response = axios.interceptors.response.use(
        response => {
            responseAction();
            return response;
        },
        () => {
            errorAction();
        },
    );

    return { request, response };
};

export default useInterceptor;
