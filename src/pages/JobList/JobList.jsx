import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobItem from './JobItem/JobItem';
import JobItemSkeleton from './JobItemSkeleton/JobItemSkeleton';
import List from '../../components/List/List';
import urls from '../../config/urls';
import fetchJobs from '../../utils/axiosRequests';

const JobList = () => {
    const [jobList, setJobList] = useState(null);

    useEffect(() => {
        const jobListCancelToken = axios.CancelToken.source();

        fetchJobs(urls.jobList, jobListCancelToken.token, setJobList);

        return () => {
            jobListCancelToken.cancel();
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
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
                        salary={job.salary}
                    />
                ))}
                skeleton={<JobItemSkeleton />}
            />
        </>
    );
};

export default JobList;
