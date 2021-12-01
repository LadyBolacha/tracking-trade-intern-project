import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ClientesProvider} from './hooks/clientes/index'
ReactDOM.render(
  <ClientesProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ClientesProvider>,
  document.getElementById('root')
);

reportWebVitals();
