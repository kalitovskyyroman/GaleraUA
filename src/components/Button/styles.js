import styled from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
    regular: '#ade8f4',
    primary: '#48cae4',
    danger: '#ef476f',
    warn: '#ffba08',
};

const StyledButton = styled.button`
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${props => theme[props.themeType] || theme.regular};
    border: none;
    border-radius: 5px;
    color: white;
    &: hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

StyledButton.propTypes = {
    themeType: PropTypes.oneOf(['regular', 'primary', 'danger', 'warn']),
};

StyledButton.defaultProps = { themeType: 'regular' };

export default StyledButton;
