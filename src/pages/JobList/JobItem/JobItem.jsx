/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import StyledCard, { StyledTitle, StyledCountryAndTime, StyledSubtitle, StyledBr } from './styles';

const JobItem = ({ title, company, created_at, location, type }) => {
    const days = Math.floor(Math.abs(new Date() - new Date(created_at)) / 864e5);

    return (
        <StyledCard>
            <StyledTitle>{title}</StyledTitle>
            <StyledSubtitle>
                {company} - <span>{type}</span>
            </StyledSubtitle>
            <StyledCountryAndTime>
                <span>{location}</span> | {days} days ago
            </StyledCountryAndTime>
            <StyledBr />
        </StyledCard>
    );
};

export default JobItem;
