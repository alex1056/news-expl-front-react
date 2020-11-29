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
  const { data } = payload;
  // console.log('main-api.js: 2) action=', action);
  next({ ...rest, type: type + REQUEST });

  try {
    // const params = data ? createGetParams(data) : {};
    const params = createGetParams(data);
    // console.log('main-api.js, params=', params);
    const response = await fetch(CallMainAPI, params).then(async (res) => {
      // console.log('api.js: 3) res=', res);
      // const data = await res.json();
      if (res.ok) 
      { 
        // console.log('api.js: 4) data=', data);
        // return  data; 
        return { status: res.status };
      }
      else throw({name: 'Неправильные логин или пароль', status: res.status});
      // console.log('api.js: 5) data=', data);
      // throw data;
    });
    return next({ ...rest, type: type + SUCCESS, response });
  } catch (error) {
    // console.log('api.js: 6) error=', error);
    throw next({ ...rest, type: type + FAILURE, error });
  }
};
