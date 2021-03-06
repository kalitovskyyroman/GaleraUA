import styled from 'styled-components';

const StyledLoader = styled.div`
    width: 100%;
    border-radius: 10px;
    position: relative;
    padding: 2px;

    & > div {
        position: absolute;
        border-radius: 10px;
        height: 100%;
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: ${({ theme }) => theme.colors.green};
        width: 0;
        animation: progressBar 2s linear infinite;
    }

    @keyframes progressBar {
        0% {
            left: 0%;
            right: 100%;
            width: 0%;
        }
        10% {
            left: 0%;
            right: 75%;
            width: 25%;
        }
        90% {
            right: 0%;
            left: 75%;
            width: 25%;
        }
        100% {
            left: 100%;
            right: 0%;
            width: 0%;
        }
    }
`;

export default StyledLoader;
