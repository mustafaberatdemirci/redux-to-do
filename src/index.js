import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Redux Import
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
 
// Store
import configureStore from './Store/configureStore';
 
const store = configureStore();
 
ReactDOM.render(
  // Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
 
reportWebVitals();