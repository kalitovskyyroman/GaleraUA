import styled from 'styled-components';

const StyledNotFound = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.mainBlack};

    & > span {
        color: ${({ theme }) => theme.colors.mainGreen};
        animation: bright-text 2s linear infinite;
    
        @keyframes bright-text {
    
            0% { opacity 0; }
    
            50% { opacity 1; }
    
            100% { opacity 0; }
        }
    }
`;

export default StyledNotFound;
