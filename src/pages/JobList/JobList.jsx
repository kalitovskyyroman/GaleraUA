import React, { useEffect, useState } from 'react';
import JobItem from './JobItem/JobItem';
import Loader from '../../components/Loader/Loader';
import CenterPosition from './styles';

const JobList = () => {
    const [jobList, setJobList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const response = await fetch('/positions.json');
        const jobs = await response.json();
        await setJobList(jobs);
        await setLoading(false);
    }, []);

    return (
        <>
            {loading ? (
                <CenterPosition>
                    <Loader />
                </CenterPosition>
            ) : (
                jobList.map(job => (
                    <JobItem
                        key={job.id}
                        title={job.title}
                        location={job.location}
                        company={job.company}
                        createdAt={job.created_at}
                        type={job.type}
                    />
                ))
            )}
        </>
    );
};
export default JobList;
