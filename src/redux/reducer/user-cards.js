// import produce from 'immer';
import {
  LOAD_USER_CARDS,
  FAILURE,
  REQUEST,
  SUCCESS,
} from '../constants';
// import api from '../middleware/api';
import { arrToMapUserCards } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, response, error } = action;
  // console.log('cards-from-api.js: action=', action);
  // console.log('user-cards.js: response=', response);

  switch (type) {
    case LOAD_USER_CARDS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_USER_CARDS + SUCCESS:
      return {
        ...state,
        entities: arrToMapUserCards(response.data),
        // entities: {lala: 'lala'},
        loading: false,
        loaded: true,
      };
    case LOAD_USER_CARDS + FAILURE:
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
