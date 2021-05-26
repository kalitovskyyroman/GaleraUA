import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > span {
        padding: 10px 0;
        font-family: 'Arvo', sans-serif;
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 30px;
`;

export default StyledForm;
