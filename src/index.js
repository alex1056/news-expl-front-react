import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import store from './redux/store';

// DEV ONLY!!!
// window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>,
 
  document.getElementById('root')
);

