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
// import {
//   usersLoadingSelector,
//   usersLoadedSelector,
//   reviewsLoadingSelector,
//   reviewsLoadedSelector,
//   orderDataSelector,
// } from './selectors';

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


export const loginAction = (data = { email: 'dlsk@dskf10.yu', password: '123' }) => {
 return {
  type: LOGIN,
  payload: { data },
  CallMainAPI: `${URL_MAIN_API}/signin`
}
};

export const logoutAction = () => {
  return {
   type: LOGOUT,
   payload: {},
   CallMainAPI: `${URL_MAIN_API}/signout`
 }
 };
 


/*
logout() {
    return fetch(`${this._urlMainApi}/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return Promise.resolve(res.status);
        }
        return Promise.reject(Error('Произошла ошибка'));
      })
      .catch((err) => Promise.reject(Error(err.message)));
  }
*/


/*
login(credentials = { email: 'dlsk@dskf10.yu', password: '123' }) {
    return fetch(`${this._urlMainApi}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return Promise.resolve(res.status);
        }
        return Promise.reject(Error('Неправильные логин или пароль'));
      })
      .catch((err) => Promise.reject(Error(err.message)));
  }
*/


/*

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

export const loadProducts = (restaurantId) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${restaurantId}`,
  restaurantId,
});

export const loadReviews = (restaurantId) => async (dispatch, getState) => {
  const state = getState();
  const loading = reviewsLoadingSelector(state, { restaurantId });
  const loaded = reviewsLoadedSelector(state, { restaurantId });

  if (loading || loaded) return;
  dispatch({ type: LOAD_REVIEWS + REQUEST, restaurantId });
  try {
    const response = await fetch(
      `/api/reviews?id=${restaurantId}`
    ).then((res) => res.json());
    dispatch({ type: LOAD_REVIEWS + SUCCESS, response, restaurantId });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, error, restaurantId });
    dispatch(replace('/error'));
  }
};

export const loadUsers = () => async (dispatch, getState) => {
  const state = getState();
  const loading = usersLoadingSelector(state);
  const loaded = usersLoadedSelector(state);

  if (loading || loaded) return;

  dispatch({ type: LOAD_USERS, CallAPI: '/api/users' });
};

export const makeOrder = () => async (dispatch, getState) => {
  const state = getState();
  const postData = orderDataSelector(state);

  try {
    await dispatch({ type: MAKE_ORDER, CallAPI: '/api/order', postData });
    dispatch(push('/order-success'));
  } catch (_) {
    dispatch(push('/order-error'));
  }
};

*/