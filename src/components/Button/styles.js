import styled from 'styled-components';
import PropTypes from 'prop-types';

const btnSize = {
    small: {
        fontSize: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '5px',
        padding: '3px',
    },
    regular: {
        fontSize: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        borderRadius: '5px',
        padding: '5px',
    },
    medium: {
        fontSize: '25px',
        paddingLeft: '22px',
        paddingRight: '22px',
        borderRadius: '5px',
        padding: '5px',
    },
    large: {
        fontSize: '30px',
        paddingLeft: '25px',
        paddingRight: '25px',
        borderRadius: '7px',
        padding: '5px',
    },
};

const StyledButton = styled.button`
    font-size: ${props => btnSize[props.size].fontSize || btnSize.regular.fontSize};
    font-weight: bold;
    padding: ${props => btnSize[props.size].padding || btnSize.regular.padding};
    padding-left: ${props => btnSize[props.size].paddingLeft || btnSize.regular.paddingLeft};
    padding-right: ${props => btnSize[props.size].paddingRight || btnSize.regular.paddingRight};
    background-color: ${props => props.theme.btnColors[props.mode] || props.theme.btnColors.regular};
    border: none;
    border-radius: ${props => btnSize[props.size].borderRadius || btnSize.regular.borderRadius};
    color: ${props => props.theme.btnColors.textColor};
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
