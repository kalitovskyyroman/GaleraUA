import styled from 'styled-components';

export const StyledTitle = styled.h1`
    font-size: 30px;
    padding: 25px 0;
    color: ${({ theme }) => theme.colors.green};
    font-weight: 600;
`;

export const StyledGeneralInfo = styled.p`
    font-size: 25px;
    padding-bottom: 15px;
    line-height: 45px;

    & > span {
        color: ${({ theme }) => theme.colors.green};
        text-transform: capitalize;
        font-weight: 600;
    }
`;

export const StyledDescriptionTitle = styled.div`
    font-size: 25px;
    color: ${({ theme }) => theme.colors.green};
    font-weight: 600;
    padding-bottom: 15px;
`;

export const StyledDescription = styled.div`
    font-size: 20px;
    padding-bottom: 40px;

    ul {
        padding: 10px 0 10px 30px;
    }
`;
