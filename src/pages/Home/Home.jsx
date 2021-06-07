import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <>Home</>;
};

export default Home;
