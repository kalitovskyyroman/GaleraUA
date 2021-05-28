/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const JobList = () => {
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        fetch('/positions.json', { mode: 'cors' })
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);

    return <>JobList</>;
};
export default JobList;
