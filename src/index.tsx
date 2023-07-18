import App from 'App';
import { init as initAnalytics } from 'instrumentation/analytics';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const domRoot = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(domRoot);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
initAnalytics();
