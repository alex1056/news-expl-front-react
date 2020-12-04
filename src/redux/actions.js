import { replace, push } from 'connected-react-router';
import {fromToDates} from './utils';
import {URL_NEWS_API, URL_MAIN_API, LANGUAGE, API_KEY, PAGE_SIZE} from '../config';
import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
  LOAD_USERS,
  MAKE_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_CARDS_FROM_API,
  LOAD_USER_CARDS,
  LOGIN,
  LOGOUT,
  DELETE_CARD_FROM_SOURCE
} from './constants';


export const loadCards = ({searchPhrase}) => {
  // console.log('actions.js: action-loadCards-searchPhrase=',searchPhrase);
  const dates = fromToDates();
  return {
    type: LOAD_CARDS_FROM_API,
    payload: { searchPhrase },
    CallNewsAPI: `${URL_NEWS_API}?q=${searchPhrase}&from=${dates.from}&to=${dates.to}&language=${LANGUAGE}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`
  }
};

export const deleteCardFromSource = (article) => {
  return {
    type: DELETE_CARD_FROM_SOURCE,
    payload: article,  
  }
};

export const loadUserCards = () => {
  // console.log('actions.js: Вызвали loadUserCards=');
  // const dates = fromToDates();
return {
  type: LOAD_USER_CARDS,
  // payload: { data: 'from action loadUserCards' },
  CallMainAPI: `${URL_MAIN_API}/articles`
}
};
