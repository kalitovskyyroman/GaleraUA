import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;

export const btnTheme = {
    regular: '#ade8f4',
    primary: '#48cae4',
    danger: '#ef476f',
    warn: '#ffba08',
};

export const btnSize = {
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

export default Global;
