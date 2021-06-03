import React from 'react';
import StyledLoader from './styles';

import useLoader from '../../Context/Loader/LoaderContext';

const Loader = () => {
    const { loading } = useLoader();

    return (
        <>
            {loading ? (
                <StyledLoader>
                    <div />
                </StyledLoader>
            ) : null}
        </>
    );
};

export default Loader;
