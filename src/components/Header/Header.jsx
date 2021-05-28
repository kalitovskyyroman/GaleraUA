import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StyledHeader, { StyledUserName } from './styles';
import Title from './Title/Title';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import UserLogo from './UserLogo/UserLogo';
import text from './config.json';
import paths from '../../config/paths';
import { UserContext } from '../../Context/User/userContext';

const Header = () => {
    const { user } = useContext(UserContext);

    const history = useHistory();
    const logInHandle = useCallback(() => history.push(paths.login), [history]);

    return (
        <StyledHeader>
            <Title>{text.title}</Title>
            <SearchBar />
            {user.isAuthenticated ? (
                <>
                    <StyledUserName>{user.data.email}</StyledUserName>
                    <UserLogo />
                </>
            ) : (
                <Button mode='primary' size='large' onClick={logInHandle}>
                    {text.enter}
                </Button>
            )}
        </StyledHeader>
    );
};
export default Header;
