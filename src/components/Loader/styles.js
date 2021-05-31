import styled from 'styled-components';

const StyledLoader = styled.div`
    border: 16px solid ${({ theme }) => theme.colors.whiteGreen};
    border-top: 16px solid ${({ theme }) => theme.colors.green};
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default StyledLoader;
