import styled, { createGlobalStyle } from 'styled-components';
import ArvoTTF from './assets/fonts/arvo/Arvo-Regular.ttf';

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
    text-decoration: none
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
    btnColors: {
        regular: '#b7e4c7',
        primary: '#52b788',
        danger: '#ef476f',
        warn: '#ffba08',
        textColor: 'white',
    },
};

export const GridLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 7fr 2fr;
    grid-template-areas:
        'header header'
        'aside content'
        'footer footer';
`;

export const GridContent = styled.div`
    grid-area: content;
    background-color: aqua;
`;

export default Global;
