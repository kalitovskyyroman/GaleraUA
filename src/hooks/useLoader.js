import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import useInterceptor from './useInterceptor';

const useLoader = () => {
    const [counter, setCounter] = useState(0);
    const inc = useCallback(() => setCounter(counter => counter + 1), [setCounter]);
    const dec = useCallback(() => setCounter(counter => counter - 1), [setCounter]);

    const interceptors = useMemo(
        () => ({
            request: request => {
                inc();
                return request;
            },
            response: response => {
                dec();
                return response;
            },
            error: () => {
                dec();
            },
        }),
        [inc, dec],
    );

    useEffect(() => {
        const { reqInterceptor, resInterceptor } = useInterceptor(
            interceptors.request,
            interceptors.response,
            interceptors.error,
        );
        return () => {
            axios.interceptors.request.eject(reqInterceptor);
            axios.interceptors.response.eject(resInterceptor);
        };
    }, [interceptors]);

    return [counter > 0];
};

export default useLoader;
