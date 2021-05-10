import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Global, { theme } from './globalStyles';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Global />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
