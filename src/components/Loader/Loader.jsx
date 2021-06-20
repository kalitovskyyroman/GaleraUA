import React from 'react';
import StyledLoader from './styles';

import useLoader from '../../hooks/useLoader';

const Loader = () => {
    const [loading] = useLoader();

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
