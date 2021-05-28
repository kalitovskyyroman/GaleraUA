/* eslint-disable no-unused-vars */
import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StyledHeader from './styles';
import Title from './Title/Title';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import UserLogo from './UserLogo/UserLogo';
import text from './config.json';
import paths from '../../config/paths';
import { UserContext } from '../../Context/User/userContext';

const Header = () => {
    const { user, setIsAuthenticated } = useContext(UserContext);

    const history = useHistory();
    const logInHandle = useCallback(() => history.push(paths.login), [history]);
    const logOutHandle = useCallback(() => {
        history.push(paths.home);
        setIsAuthenticated(false);
    }, [history]);

    return (
        <StyledHeader>
            <Title>{text.title}</Title>
            <SearchBar />
            {user.isAuthenticated ? (
                <>
                    {/* <Button mode='primary' size='large' onClick={logOutHandle}>
                        {user.data.email}
                    </Button> */}
                    <UserLogo />
                    {/* <Button mode='primary' onClick={logOutHandle}>
                        {text.logout}
                    </Button> */}
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
