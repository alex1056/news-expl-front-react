import { FAILURE, REQUEST, SUCCESS } from '../constants';

// const createPostParams = (data) => ({
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(data),
// });

// const createGetParams = (data) => ({
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(data),
// });

const createGetParams = (data) => {
  // console.log('main-api.js, data=', data);
  if (data) {
 return {
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: data.email,
    password: data.password,
  }),
    }
  }
  else {
    return {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    }
  }
};

export default (store) => (next) => async (action) => {
  // console.log('main-api.js: 1) action=', action);

  if (!action.CallMainAPI) 
  {
    // console.log('api.js: Сработало !action.CallMainAPI', action.CallMainAPI);
  return next(action);
}

  const { CallMainAPI, type, payload, ...rest } = action;
  let data;
  try {
    data = payload.payload;
  } catch (error) {
    data = null;
  }
  
  // console.log('main-api.js: 2) action=', action);
  next({ ...rest, type: type + REQUEST });

  try {
    
    const params = createGetParams(data);
    const response = await fetch(CallMainAPI, params).then(async (res) => {
      const data = await res.json();
      if (res.ok) 
      { 
        return  data; 
      }
      throw data;
    });
    return next({ ...rest, type: type + SUCCESS, response });
  } catch (error) {
    throw next({ ...rest, type: type + FAILURE, error });
  }
};
