import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import Routes from './routes/routerProvider';
import AuthProvider from './provider/authProvider';

// the root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// rendering the root that is routered by the router (the App is defined in the Router configuration to be the frame)
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);
