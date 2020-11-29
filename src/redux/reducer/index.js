import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import order from './order';
// import restaurants from './restaurants';
// import products from './products';
// import reviews from './reviews';
// import users from './users';
// import history from '../../history';
import cardsFromApi from './cards-from-api';
import loginLogout from './login-logout';

const reducer = combineReducers({
  // router: connectRouter(history),
  cardsFromApi,
  loginLogout,
  // order,
  // restaurants,
  // products,
  // reviews,
  // users,
});

export default reducer;
