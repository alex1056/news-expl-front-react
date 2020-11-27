import { FAILURE, REQUEST, SUCCESS } from '../constants';

// const createPostParams = (data) => ({
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(data),
// });

const createGetParams = (data) => ({
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

export default (store) => (next) => async (action) => {
  // console.log('api.js: 1) action=', action);

  if (!action.CallAPI) 
  {

    // console.log('api.js: Сработало !action.CallAPI', action.CallAPI);
  return next(action);
}

  const { CallAPI, type, getData, ...rest } = action;
  // console.log('api.js: 2) action=', CallAPI, type, getData);
  next({ ...rest, type: type + REQUEST });

  try {
    const params = getData ? createGetParams(getData) : {};

    const response = await fetch(CallAPI, params).then(async (res) => {
      const data = await res.json();
      if (res.ok) return data;
      throw data;
    });
    return next({ ...rest, type: type + SUCCESS, response });
  } catch (error) {
    throw next({ ...rest, type: type + FAILURE, error });
  }
};
