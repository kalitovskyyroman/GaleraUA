/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyledModal, StyledModalContent } from './styles';

const ProfileModal = ({ children, active, setActive }) => (
    <StyledModal active={active} onClick={() => setActive(false)}>
        <StyledModalContent onClick={e => e.stopPropagation()}>{children}</StyledModalContent>
    </StyledModal>
);

export default ProfileModal;
