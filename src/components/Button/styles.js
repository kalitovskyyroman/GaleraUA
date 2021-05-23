import styled from 'styled-components';
import PropTypes from 'prop-types';

const btnSize = {
    small: {
        fontSize: '10px',
        padding: '3px 10px',
    },
    regular: {
        fontSize: '15px',
        padding: '7px 20px',
    },
    medium: {
        fontSize: '15px',
        padding: '10px 22px',
    },
    large: {
        fontSize: '15px',
        padding: '15px 40px',
    },
};

const StyledButton = styled.button`
    font-size: ${({ size }) => btnSize[size].fontSize || btnSize.regular.fontSize};
    font-weight: bold;
    padding: ${({ size }) => btnSize[size].padding || btnSize.regular.padding};
    background-color: ${({ mode, theme }) => theme.btnColors[mode] || theme.btnColors.regular};
    border: none;
    border-radius: 0;
    border: 3px solid ${({ mode, theme }) => theme.btnColorsHover[mode] || theme.btnColorsHover.regular};
    color: ${({ theme }) => theme.btnColors.textColor};
    text-transform: uppercase;
    font-family: 'Arvo', sans-serif;

    &:hover {
        cursor: pointer;
        background-color: ${({ mode, theme }) => theme.btnColorsHover[mode] || theme.btnColorsHover.regular};
    }

    &:disabled {
        opacity: 0.5;
        border: none;

        &:hover {
            opacity: 0.4; //this is what you want
        }
    }
`;

StyledButton.propTypes = {
    mode: PropTypes.oneOf(['regular', 'primary', 'danger', 'warn']),
    size: PropTypes.oneOf(['small', 'regular', 'medium', 'large']),
};

StyledButton.defaultProps = { mode: 'regular', size: 'regular' };

export default StyledButton;
