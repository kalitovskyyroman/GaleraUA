/* eslint-disable prefer-template */
import React from 'react';
import PropTypes from 'prop-types';
import StyledCard, { StyledTitle, StyledCountryAndTime, StyledSubtitle, StyledBr } from './styles';
import config from './config';
import calculateDaysFromNow from '../../../utils/calculateDates';

const JobItem = ({ title, company, createdAt, location, type }) => (
    <StyledCard>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>
            {company} - <span>{type.replace('_', ' ')}</span>
        </StyledSubtitle>
        <StyledCountryAndTime>
            <span>{location}</span> |{' '}
            {calculateDaysFromNow(createdAt) === 0 ? config.today : calculateDaysFromNow(createdAt) + ' ' + config.time}
        </StyledCountryAndTime>
        <StyledBr />
    </StyledCard>
);

JobItem.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default JobItem;
