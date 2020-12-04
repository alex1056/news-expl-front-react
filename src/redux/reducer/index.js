import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import cardsFromApi from './cards-from-api';
import userCards from './user-cards';


const reducer = combineReducers({
  // router: connectRouter(history),
  cardsFromApi,
  userCards,
});

export default reducer;
