import styled from 'styled-components';

export const StyledModal = styled.div`
    height: 100vh;
    width: 100vw;
    opacity: ${({ active }) => (active ? '1' : '0')};
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: ${({ active }) => (active ? 'all' : 'none')};
    transition: 0.5s;
`;

export const StyledModalContent = styled.div`
    position: absolute;
    top: 80px;
    right: 50px;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
