import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

button {
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    padding: 5px;
}
`;

export const theme = {
    btnColors: {
        regular: '#b7e4c7',
        primary: '#52b788',
        danger: '#ef476f',
        warn: '#ffba08',
        textColor: 'white',
    },
};

export default Global;
