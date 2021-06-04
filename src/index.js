import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Global, { theme } from './globalStyles';

import GlobalProvider from './Context/globalProvider';

ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            <ThemeProvider theme={theme}>
                <Global />
                <App />
            </ThemeProvider>
        </GlobalProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
