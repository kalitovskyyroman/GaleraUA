import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import StyledHeader, { StyledUserName } from './styles';
import Title from './Title/Title';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import UserLogo from './UserLogo/UserLogo';
import Loader from '../Loader/Loader';
import text from './config.json';
import paths from '../../config/paths';

import useUser from '../../Context/User/userContext';
import useLoader from '../../Context/Loader/LoaderContext';

const Header = () => {
    const { user } = useUser();
    const { loading } = useLoader();

    const history = useHistory();
    const logInHandle = useCallback(() => history.push(paths.login), [history]);

    return (
        <>
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
            {loading ? <Loader /> : null}
        </>
    );
};
export default Header;
