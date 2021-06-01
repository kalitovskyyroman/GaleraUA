import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobItem from './JobItem/JobItem';
import urls from '../../config/urls';

const JobList = () => {
    const [jobList, setJobList] = useState([]);

    useEffect(async () => {
        const response = await axios.get(urls.jobList);
        setJobList(response.data);
    }, []);

    return (
        <>
            {jobList.map(job => (
                <JobItem
                    key={job.id}
                    title={job.title}
                    location={job.location}
                    company={job.company}
                    createdAt={job.created_at}
                    type={job.type}
                />
            ))}
        </>
    );
};

export default JobList;
