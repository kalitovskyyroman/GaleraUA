import React from 'react';
import StyledLoader from './styles';

import useLoader from '../../Context/Loader/LoaderContext';

const Loader = () => {
    const { requestsCount } = useLoader();

    return (
        <>
            {!(requestsCount === 0) ? (
                <StyledLoader>
                    <div />
                </StyledLoader>
            ) : null}
        </>
    );
};

export default Loader;
