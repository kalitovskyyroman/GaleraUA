import styled from 'styled-components';

const StyledHeader = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.mainBlack};
    padding: 0 40px;
`;

export const StyledUserName = styled.h2`
    font-size: 20px;
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.white};
`;

export default StyledHeader;
