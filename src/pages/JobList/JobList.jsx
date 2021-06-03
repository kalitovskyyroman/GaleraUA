import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobItem from './JobItem/JobItem';
import JobItemSkeleton from './JobItemSkeleton/JobItemSkeleton';
import List from '../../components/List/List';
import urls from '../../config/urls';

const JobList = () => {
    const [jobList, setJobList] = useState(null);

    useEffect(async () => {
        const response = await axios.get(urls.jobList);
        setJobList(response.data.jobs);
    }, []);

    useEffect(async () => {
        const response = await axios.get(urls.jobList + '?limit=10');
        console.log(response);
    }, []);

    return (
        <>
            <List
                items={jobList?.map(job => (
                    <JobItem
                        key={job.id}
                        title={job.title}
                        location={job.candidate_required_location}
                        company={job.company_name}
                        createdAt={job.publication_date}
                        type={job.job_type}
                    />
                ))}
                skeleton={<JobItemSkeleton />}
            />
        </>
    );
};

export default JobList;
