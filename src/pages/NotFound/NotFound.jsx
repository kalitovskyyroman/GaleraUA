import React from 'react';
import StyledNotFound from './styles';
import config from './config';

const NotFound = () => <StyledNotFound children={<span>{config.text}</span>} />;
export default NotFound;
