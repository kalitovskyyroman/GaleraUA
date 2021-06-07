import styled from 'styled-components';

export const StyledTitle = styled.h1`
    font-size: 30px;
    padding: 25px 0;
    color: ${({ theme }) => theme.colors.green};
    font-weight: 600;
`;

export const StyledLocation = styled.h2`
    font-size: 20px;
    padding-bottom: 15px;

    & > span {
        color: ${({ theme }) => theme.colors.green};
        text-transform: capitalize;
        font-weight: 600;
    }
`;

export const StyledSalary = styled.h3`
    font-size: 20px;
    padding-bottom: 15px;

    & > span {
        color: ${({ theme }) => theme.colors.green};
        font-weight: 600;
    }
`;

export const StyledJobType = styled.h3`
    font-size: 20px;
    padding-bottom: 15px;

    & > span {
        color: ${({ theme }) => theme.colors.green};
        text-transform: capitalize;
        font-weight: 600;
    }
`;

const StyledDescription = styled.div`
    font-size: 20px;
`;

export default StyledDescription;
