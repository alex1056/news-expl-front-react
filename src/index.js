import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from './redux/store';

// DEV ONLY!!!
// window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
  </Router>
</Provider>,
 
  document.getElementById('root')
);

