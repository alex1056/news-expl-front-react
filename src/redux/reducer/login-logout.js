// import produce from 'immer';
import {
  LOGIN,
  LOGOUT,
  FAILURE,
  REQUEST,
  SUCCESS,
} from '../constants';
// import api from '../middleware/api';
import { arrToMap } from '../utils';

const initialState = {
  entities: {login: false},
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
        entities: { login: true, ...response },
        loading: false,
        loaded: true,
        error,
      };
    case LOGIN + FAILURE:
      return {
        ...state,        
        loading: false,
        loaded: false,
        error,
      };
      case LOGOUT + REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case LOGOUT + SUCCESS:
        return {
          ...state,
          entities: { login: false, ...response },
          loading: false,
          loaded: true,
          error,
        };
      case LOGOUT + FAILURE:
        return {
          ...state,        
          loading: false,
          loaded: false,
          error,
        };

    default:
      return state;
  }
};
