import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './fontawesome.config';
import './i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/base.scss';
import { Observable } from 'windowed-observable';

const observable = new Observable('cart');

ReactDOM.render(
  <React.StrictMode>
    <App observable={observable}/>
  </React.StrictMode>,
  document.getElementById('productList')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
