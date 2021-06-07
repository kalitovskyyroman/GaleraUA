import React from 'react';
import PropTypes from 'prop-types';
import StyledCard, {
    StyledTitle,
    StyledCountryAndTime,
    StyledSubtitle,
    StyledBr,
    StyledLocation,
    DescriptionSection,
    StyledSalary,
} from './styles';
import calculateDaysFromNow from '../../../utils/calculateDates';
import { jobDaysFormatting, workTypeFormatting } from '../../../utils/stringFormatting';

const JobItem = ({ title, company, createdAt, location, type, salary }) => {
    const days = calculateDaysFromNow(createdAt);

    return (
        <StyledCard>
            <StyledTitle>{title}</StyledTitle>
            <StyledSubtitle>
                {company} - <span>{workTypeFormatting(type)}</span>
            </StyledSubtitle>
            <DescriptionSection>
                <StyledCountryAndTime>
                    <StyledLocation>{location ? location + ' | ' : null}</StyledLocation>
                    <span> {jobDaysFormatting(days)}</span>
                </StyledCountryAndTime>
                <StyledSalary>{salary}</StyledSalary>
            </DescriptionSection>
            <StyledBr />
        </StyledCard>
    );
};

JobItem.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
};

export default JobItem;
