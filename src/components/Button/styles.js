import styled from 'styled-components';
import PropTypes from 'prop-types';

const btnSize = {
    small: {
        fontSize: '10px',
        borderRadius: '5px',
        padding: '3px 10px',
    },
    regular: {
        fontSize: '20px',
        borderRadius: '5px',
        padding: '5px 20px',
    },
    medium: {
        fontSize: '25px',
        borderRadius: '5px',
        padding: '5px 22px',
    },
    large: {
        fontSize: '30px',
        borderRadius: '7px',
        padding: '5px 25px',
    },
};

const StyledButton = styled.button`
    font-size: ${({ size }) => btnSize[size].fontSize || btnSize.regular.fontSize};
    font-weight: bold;
    padding: ${({ size }) => btnSize[size].padding || btnSize.regular.padding};
    background-color: ${({ mode, theme }) => theme.btnColors[mode] || theme.btnColors.regular};
    border: none;
    border-radius: ${({ size }) => btnSize[size].borderRadius || btnSize.regular.borderRadius};
    color: ${({ theme }) => theme.btnColors.textColor};
    &: hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

StyledButton.propTypes = {
    mode: PropTypes.oneOf(['regular', 'primary', 'danger', 'warn']),
    size: PropTypes.oneOf(['small', 'regular', 'medium', 'large']),
};

StyledButton.defaultProps = { mode: 'regular', size: 'regular' };

export default StyledButton;
