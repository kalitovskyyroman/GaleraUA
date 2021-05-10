import styled from 'styled-components';
import PropTypes from 'prop-types';
import { btnTheme, btnSize } from '../../globalStyles';

const StyledButton = styled.button`
    font-size: ${props => btnSize[props.size].fontSize || btnSize.regular.fontSize};
    font-weight: bold;
    padding: ${props => btnSize[props.size].padding || btnSize.regular.padding};
    padding-left: ${props => btnSize[props.size].paddingLeft || btnSize.regular.paddingLeft};
    padding-right: ${props => btnSize[props.size].paddingRight || btnSize.regular.paddingRight};
    background-color: ${props => btnTheme[props.themeType] || btnTheme.regular};
    border: none;
    border-radius: ${props => btnSize[props.size].borderRadius || btnSize.regular.borderRadius};
    color: white;
    &: hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

StyledButton.propTypes = {
    themeType: PropTypes.oneOf(['regular', 'primary', 'danger', 'warn']),
    size: PropTypes.oneOf(['small', 'regular', 'medium', 'large']),
};

StyledButton.defaultProps = { themeType: 'regular', size: 'regular' };

export default StyledButton;
