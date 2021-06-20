/* eslint-disable arrow-body-style */
import React from 'react';
import Skeleton from '../../../components/Skeleton/Skeleton';
import StyledSkeletonJobItem from './styles';

const JobItemSkeleton = () => (
    <StyledSkeletonJobItem>
        <Skeleton marginLeft='0' marginRight='0' height='30px' />
        <Skeleton marginLeft='0' marginRight='0' height='15px' width='40%' />
        <Skeleton marginLeft='0' marginRight='0' height='10px' width='20%' />
    </StyledSkeletonJobItem>
);

export default JobItemSkeleton;
