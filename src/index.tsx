import './index.css';
import App from 'App';
import * as React from 'react';
import ReactDOM from 'react-dom/client';


const domRoot = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(domRoot);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
