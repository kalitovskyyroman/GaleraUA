import React from 'react';
import StyledHeader from './styles';
import Title from './Title/Title';
import Button from '../Button/Button';
import text from './config.json';

import grid from '../../App.module.css';

const Header = () => (
    <div className={grid.grid_header}>
        <StyledHeader>
            <Title>{text.title}</Title>
            <Button>{text.enter}</Button>
        </StyledHeader>
    </div>
);
export default Header;
