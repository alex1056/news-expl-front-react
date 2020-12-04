import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import newsApi from './middleware/news-api';
import mainApi from './middleware/main-api';
import reducer from './reducer';
// import history from '../history';

const enhancer = applyMiddleware(
  //thunk,
  // routerMiddleware(history),
  newsApi,
  mainApi,
);

export default createStore(reducer, composeWithDevTools(enhancer));
