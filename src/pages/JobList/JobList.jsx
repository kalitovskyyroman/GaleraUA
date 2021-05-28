/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import JobItem from './JobItem/JobItem';

const JobList = () => {
    const [jobList, setJobList] = useState([]);

    useEffect(async () => {
        const response = await fetch('/positions.json');
        const jobs = await response.json();
        await setJobList(jobs);
    }, []);

    return (
        <>
            {jobList.map(job => (
                <JobItem
                    title={job.title}
                    location={job.location}
                    company={job.company}
                    created_at={job.created_at}
                    type={job.type}
                />
            ))}
        </>
    );
};
export default JobList;
