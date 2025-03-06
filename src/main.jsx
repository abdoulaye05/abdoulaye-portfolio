import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { HashRouter } from 'react-router-dom'; // ✅ Import du HashRouter

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter> {/* ✅ Ajout de HashRouter */}
            <App />
        </HashRouter>
    </React.StrictMode>,
);
