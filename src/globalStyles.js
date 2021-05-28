import styled, { createGlobalStyle } from 'styled-components';
import ArvoTTF from './assets/fonts/arvo/Arvo-Regular.ttf';
import * as colors from './variables';

const Global = createGlobalStyle`

@font-face {
    font-family: 'Arvo';
    src: url(${ArvoTTF}) format('truetype');
}

* {
    margin: 0;
    padding: 0;
    border: 0;
}

*, *:before, *:after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
:focus,:active { outline: none }
a:focus,a:active { outline: none }

a {
    text-decoration: none;
    color: black;
}

a:visited {
    color: black
}

nav, footer, header, aside { display: block }

html,body{
	height: 100%;
	width: 100%;
	font-size: 100%;
	line-height: 1;
	font-size: 14px;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

input,button,textarea{font-family:inherit;}

input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner {padding:0;border:0;}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}

h1,h2,h3,h4,h5,h6 {
    font-size:inherit;
    font-weight: 400;
    font-family: 'Arvo', sans-serif;
}

ol, ul {
	list-style: none;
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
    colors: {
        mainBlack: colors.black,
        white: colors.white,
        green: colors.green,
        grey: colors.grey,
        whiteGreen: colors.whiteGreen,
    },
    btnColors: {
        regular: colors.whiteGreen,
        primary: colors.darkGreen,
        danger: colors.pink,
        warn: colors.orange,
        textColor: colors.white,
    },
    btnColorsHover: {
        primary: colors.green,
    },
};

export const GridLayout = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: 12vh auto 10vh;
`;

export const GridContent = styled.div`
    grid-column: 5 / -4;
    min-height: 90vh;
`;

export const GridHeader = styled.header`
    height: 100%;
    align-self: center;
    grid-column: 1 / -1;
`;

export const GridAside = styled.aside`
    grid-column: 2 / 5;
`;

export const GridFooter = styled.footer`
    grid-column: 1 / -1;
`;

export default Global;
