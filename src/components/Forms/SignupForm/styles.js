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

export const StyledInput = styled.input`
    display: none;
`;

export const StyledDropZone = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    height: 100px;
    width: 200px;
    border: 1px dashed black;
    background-image: url(${({ imgSrc }) => imgSrc});
`;

export const StyledDropZoneFill = styled(StyledDropZone)`
    background-color: gray;
`;

export default StyledForm;
