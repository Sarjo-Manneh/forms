import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import SignUpUser from './components/SignUpUser/SignUpUser';
import AddProduct from './components/AddProduct/AddProduct/AddProduct';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddProduct/>
    <SignUpUser/>
  </React.StrictMode>
);


reportWebVitals();
