
import React from 'react';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.querySelector('#root')
const root = ReactDOMClient.createRoot(container)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
