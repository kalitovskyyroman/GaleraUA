import styled from 'styled-components';

export const StyledNoItems = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10%;

    & > h1 {
        font-size: 30px;
    }
`;

export const StyledSkeletonBlock = styled.div`
    max-height: 90vh;
    overflow: hidden;
`;
