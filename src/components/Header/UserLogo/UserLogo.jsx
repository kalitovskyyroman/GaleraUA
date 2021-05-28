import React, { useState, useContext } from 'react';
import StyledLogo from './styles';
import config from './config';
import ProfileModal from '../../Modals/ProfileModal/ProfileModal';
import Button from '../../Button/Button';

import { UserContext } from '../../../Context/User/userContext';

const UserLogo = () => {
    const { setIsAuthenticated } = useContext(UserContext);

    const [modalActive, setModalActive] = useState(false);

    const logOutHandle = () => {
        setIsAuthenticated(false);
    };

    return (
        <>
            <StyledLogo onClick={() => setModalActive(true)} img={config.logo} />
            <ProfileModal active={modalActive} setActive={setModalActive}>
                <Button onClick={logOutHandle} mode='primary'>
                    {config.btnText}
                </Button>
            </ProfileModal>
        </>
    );
};

export default UserLogo;
