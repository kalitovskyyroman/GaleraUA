import styled from 'styled-components';

const StyledLogo = styled.div`
    height: 40px;
    width: 40px;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
`;

export default StyledLogo;
