import React from 'react';
import ReactDOM from 'react-dom/client';
import Normalize from 'react-normalize';
import './index.css';
import { Login } from './login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Normalize />
    <Login />
  </React.StrictMode>
);
