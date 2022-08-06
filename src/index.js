import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App primeiroNome="Adrian" segundoNome="Rodrigues" nota="7.0"/>
    
  
  </React.StrictMode>
);


