import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // If you have global CSS styles

import App from './App'; // Ensure you have an App.js file in the src directory

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
