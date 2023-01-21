import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ApiProvider from './context/api-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <ApiProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiProvider>
  </>
);

