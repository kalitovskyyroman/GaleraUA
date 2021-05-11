import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import StyledHeader from './styles';
import Title from './Title/Title';
import Button from '../Button/Button';
import text from './config.json';
import { paths } from '../../AppConfig';

import grid from '../../App.module.css';

const Header = () => {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push(paths.login), [history]);

    return (
        <div className={grid.grid_header}>
            <StyledHeader>
                <Title>{text.title}</Title>
                <Button mode='primary' onClick={handleOnClick}>
                    {text.enter}
                </Button>
            </StyledHeader>
        </div>
    );
};
export default Header;
