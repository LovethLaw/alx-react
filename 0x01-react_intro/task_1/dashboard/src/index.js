import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Notification from './Notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const rootNotification = ReactDOM.createRoot(document.getElementById('root-notifications'));

// rootNotification.render(
//   <React.StrictMode>
//     <Notification />
//   </React.StrictMode>
// )

root.render(
  <React.StrictMode>
    <Notification />
    <App />
  </React.StrictMode>
);

