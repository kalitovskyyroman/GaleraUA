/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import StyledDescription, { StyledTitle, StyledLocation, StyledSalary, StyledJobType } from './styles';
import { workTypeFormatting } from '../../utils/stringFormatting';

const Job = props => {
    const {
        title,
        category,
        company_name,
        description,
        job_type,
        publication_date,
        salary,
        candidate_required_location,
    } = props.location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <StyledTitle>{title}</StyledTitle>
            <StyledLocation>
                Location: <span>{candidate_required_location}</span>
                {salary && <StyledSalary>{salary}</StyledSalary>}
            </StyledLocation>
            <StyledJobType>
                Job type: <span>{workTypeFormatting(job_type)}</span>
            </StyledJobType>
            <StyledDescription>{ReactHtmlParser(description)}</StyledDescription>
        </>
    );
};

export default Job;
