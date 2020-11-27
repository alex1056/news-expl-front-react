// import produce from 'immer';
import {
  LOAD_CARDS_FROM_API,
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
  // console.log('cards-from-api.js: action=', action);

  switch (type) {
    case LOAD_CARDS_FROM_API + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_CARDS_FROM_API + SUCCESS:
      return {
        ...state,
        entities: arrToMap(response.articles, payload.searchPhrase),
        // entities: {lala: 'lala'},
        loading: false,
        loaded: true,
      };
    case LOAD_CARDS_FROM_API + FAILURE:
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
