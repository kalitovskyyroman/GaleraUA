import styled from 'styled-components';

const StyledSearchBar = styled.div`
    width: 70%;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
`;

export const TextSearchBar = styled.input`
    width: 65%;
    padding-left: 15px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 25px;
    font-family: 'Arvo', sans-serif;
    background-color: inherit;
    width: 100%;
    ::placeholder {
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.6;
    }
`;
export const SearchBtn = styled.button`
    padding: 0;
    color: ${({ theme }) => theme.colors.white};
    padding: 0 15px;
    height: 30px;
    background-color: inherit;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 10px;
`;

export default StyledSearchBar;
