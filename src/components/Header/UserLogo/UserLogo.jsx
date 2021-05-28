/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import StyledLogo from './styles';
import config from './config';
import ProfileModal from '../../Modals/ProfileModal/ProfileModal';
import Button from '../../Button/Button';

const UserLogo = () => {
    const [modalActive, setModalActive] = useState(true);

    return (
        <>
            <StyledLogo onClick={() => setModalActive(true)} img={config.logo}></StyledLogo>
            <ProfileModal active={modalActive} setActive={setModalActive}>
                <Button mode='primary'>Log out</Button>
            </ProfileModal>
        </>
    );
};

// UserLogo.propTypes = {};

export default UserLogo;
