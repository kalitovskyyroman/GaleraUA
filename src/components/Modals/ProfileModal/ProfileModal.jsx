import React from 'react';
import PropTypes from 'prop-types';
import { StyledModal, StyledModalContent } from './styles';

const ProfileModal = ({ children, active, setActive }) => (
    <StyledModal active={active} onClick={() => setActive(false)}>
        <StyledModalContent onClick={e => e.stopPropagation()}>{children}</StyledModalContent>
    </StyledModal>
);

ProfileModal.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
};

export default ProfileModal;
