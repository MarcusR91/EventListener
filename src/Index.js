import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from "./Context/AuthContext";
import ErrorBoundry from "./components/ErrorHandling/ErrorBoundry";
import ErrorUi from './components/ErrorHandling/pages/ErrorUi';

const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <ErrorBoundry errorUI={<ErrorUi />}>
            <AuthContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AuthContextProvider>
        </ErrorBoundry>
    </React.StrictMode>

)

// reactDom.render(
// <React.StrictMode>
//     <App />
// </React.StrictMode>
//  ,document.getElementById('root'));
