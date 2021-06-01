import styled from 'styled-components';

const defaultMargin = '10px';

const StyledSkeletonBase = styled.div`
    height: ${({ height }) => height || '100px'};
    width: ${({ width }) => width || '100%'};
    margin-left: ${({ marginLeft }) => marginLeft || defaultMargin};
    margin-top: ${({ marginTop }) => marginTop || defaultMargin};
    margin-bottom: ${({ marginBottom }) => marginBottom || defaultMargin};
    margin-right: ${({ marginRight }) => marginRight || defaultMargin};
    border-radius: ${({ borderRadius }) => borderRadius || '10px'};

    background-color: #ccc;

    background-image: linear-gradient(-90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);

    animation: shine-lines 5s infinite linear;

    @keyframes shine-lines {
        0% {
            background-position: 0px;
        }

        100% {
            background-position: 1000px;
        }
    }
`;

export default StyledSkeletonBase;
