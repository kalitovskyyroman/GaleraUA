/* eslint-disable react/jsx-fragments */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { StyledDescription, StyledTitle, StyledGeneralInfo } from './styles';
import config from './config';

const Job = props => {
    const { title, description, ...state } = props.location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <StyledTitle>{title}</StyledTitle>
            <StyledGeneralInfo>
                {config.genegateInfoArray(state).map(
                    item =>
                        item.payload && (
                            <React.Fragment key={item.title}>
                                {item.title}
                                <span>{item.payload}</span>
                                <br />
                            </React.Fragment>
                        ),
                )}
            </StyledGeneralInfo>
            <StyledDescription>{ReactHtmlParser(description)}</StyledDescription>
        </>
    );
};

export default Job;
