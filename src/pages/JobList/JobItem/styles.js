import styled from 'styled-components';

const StyledCard = styled.div`
    margin: 30px 0;
`;

export const StyledTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green};
`;

export const StyledSubtitle = styled.h3`
    font-size: 15px;
    padding: 10px 0;

    & > span {
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.green};
        font-weight: bold;
    }
`;

export const StyledCountryAndTime = styled.div`
    font-size: 15px;
    padding: 5px 0;
    color: ${({ theme }) => theme.colors.grey};
`;

export const StyledLocation = styled.span`
    color: ${({ theme }) => theme.colors.green};
    font-weight: bold;
`;

export const StyledBr = styled.div`
    margin: 20px 0;
    background-color: ${({ theme }) => theme.colors.grey};
    height: 0.5px;
`;

export const DescriptionSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledSalary = styled.div`
    color: ${({ theme }) => theme.colors.green};
    font-family: 'Arvo', sans-serif;
`;

export default StyledCard;
