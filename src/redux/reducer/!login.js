// import produce from 'immer';
import {
  LOGIN,
  FAILURE,
  REQUEST,
  SUCCESS,
} from '../constants';
// import api from '../middleware/api';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, response, error } = action;
  // console.log('reducer login.js: action=', action);

  switch (type) {
    case LOGIN + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN + SUCCESS:
      return {
        ...state,
        // entities: arrToMap(response.articles, payload.searchPhrase),
        entities: response,
        // entities: {lala: 'lala'},
        loading: false,
        loaded: true,
        error,
      };
    case LOGIN + FAILURE:
      // console.log('reducer (LOGIN + FAILURE) login.js: error=', error);
      return {
        ...state,        
        loading: false,
        loaded: false,
        error,
      };
    // case ADD_REVIEW:
    //   return produce(state, (draft) => {
    //     draft.entities[payload.restaurantId].reviews.push(reviewId);
    //   });
    default:
      return state;
  }
};
