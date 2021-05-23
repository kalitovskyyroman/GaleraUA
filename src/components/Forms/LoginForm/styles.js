import styled from 'styled-components';
import { Form } from 'formik';

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;

    & > span {
        padding: 10px 0;
        font-family: 'Arvo', sans-serif;
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 30px;
`;

export default StyledForm;
