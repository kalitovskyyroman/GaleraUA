import styled from 'styled-components';

export const StyledError = styled.span`
    font-family: 'Arvo', sans-serif;
    display: block;
    padding: 5px 0;
    color: red;
`;

const Styledlabel = styled.input`
    transition: all 0.3s ease-in-out;
    font-size: 20px;
    width: 400px;
    display: block;
    border: none;
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: solid 1px ${({ theme }) => theme.colors.green};
    transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, ${({ theme }) => theme.colors.green} 4%);
    background-position: -400px 0;
    background-size: 400px 100%;
    background-repeat: no-repeat;
    color: darken(${({ theme }) => theme.colors.green}, 20%);

    &:focus {
        box-shadow: none;
        outline: none;
        background-position: 0 0;
        &::-webkit-input-placeholder {
            transition: all 0.3s ease-in-out;
            font-size: 11px;
            transform: translateY(-20px);
            visibility: visible !important;
        }
    }
`;

export default Styledlabel;
