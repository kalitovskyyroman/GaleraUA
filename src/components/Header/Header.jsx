import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import StyledHeader from './styles';
import Title from './Title/Title';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import text from './config.json';
import { paths } from '../../AppConfig';

const Header = () => {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push(paths.login), [history]);

    return (
        <StyledHeader>
            <Title>{text.title}</Title>
            <SearchBar />
            <Button mode='primary' size='large' onClick={handleOnClick}>
                {text.enter}
            </Button>
        </StyledHeader>
    );
};
export default Header;
