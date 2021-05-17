import styled from 'styled-components';

const StyledFooter = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.mainBlack};
    padding: 0 40px;
`;

export const FooterText = styled.div`
    color: #ffffff;
`;

export default StyledFooter;
