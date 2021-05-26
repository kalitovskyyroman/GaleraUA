import styled from 'styled-components';

export const StyledInput = styled.input`
    display: none;
`;

export const StyledDropZone = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.green};
    margin: 20px 0;
    height: 100px;
    width: 200px;
    border: 1px dashed black;
    background-image: url(${({ imgSrc }) => imgSrc});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const StyledDropZoneFill = styled(StyledDropZone)`
    background-color: gray;
`;
