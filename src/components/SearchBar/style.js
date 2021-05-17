import styled from 'styled-components';

const StyledSearchBar = styled.div`
    width: 70%;
    color: white;
    display: flex;
`;

export const TextSearchBar = styled.input`
    width: 65%;
    color: #ffffff;
    font-size: 25px;
    font-family: 'Arvo', sans-serif;
    background-color: inherit;
    width: 100%;
    ::placeholder {
        color: #ffffff;
        opacity: 0.6;
    }
`;
export const SearchBtn = styled.button`
    padding: 0;
    color: white;
    width: 30px;
    height: 30px;
    background-color: inherit;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 10px;
`;

export default StyledSearchBar;
