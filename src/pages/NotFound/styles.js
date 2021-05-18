import styled from 'styled-components';

const StyledNotFoundContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledNotFound = styled.div`
    font-size: 70px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    margin: 0 20% 5% 0;

    & > span {
        display: block;
        color: ${({ theme }) => theme.colors.green};
        animation: bright-text 2s linear infinite;

        @keyframes bright-text {

            0% { opacity 0; }

            50% { opacity 1; }

            100% { opacity 0; }
        }
}`;

export const StyledLogo = styled.img`
    padding-bottom: 30px;
`;

export default StyledNotFoundContainer;
