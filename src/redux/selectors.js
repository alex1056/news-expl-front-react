import { createSelector } from 'reselect';
import { createMatchSelector } from 'connected-react-router';
import { getById, keyWordsSummary, sortOriginArray} from './utils';

export const cardsFromApiSelector = (state) => state.cardsFromApi.entities;
export const cardsFromApiLoadingSelector = (state) => state.cardsFromApi.loading;
export const cardsFromApiLoadedSelector = (state) => state.cardsFromApi.loaded;
export const cardsFromApiErrorSelector = (state) => state.cardsFromApi.error;

export const loginLogoutSelector = (state) => state.loginLogout.entities;
export const loginLogoutLoadingSelector = (state) => state.loginLogout.loading;
export const loginLogoutLoadedSelector = (state) => state.loginLogout.loaded;
export const loginLogoutErrorSelector = (state) => state.loginLogout.error;

export const userCardsSelector = (state) => state.userCards.entities;
export const userCardsLoadingSelector = (state) => state.userCards.loading;
export const userCardsLoadedSelector = (state) => state.userCards.loaded;
export const userCardsErrorSelector = (state) => state.userCards.error;

export const cardsFromApiUserCardsSelector = createSelector(
  cardsFromApiSelector,
  userCardsSelector,
  (cardsFromApi, userCards) => {
    
    Object.keys(userCards)
    .forEach((item) => { 
      if(cardsFromApi[item]) {
        return cardsFromApi[item] = {...cardsFromApi[item], userSaved: true};
      }
    } 
    )
    return cardsFromApi;
}
);


export const userCardsSummarySelector = createSelector(
  userCardsSelector,
  (userCards) => {
    const originArray = Object.keys(userCards).map((item) => userCards[item]);
    const resultArr = sortOriginArray(originArray);
    const resultObj = {totalNumber: null, keyword1: null, keyword2: null, onotherWordsNumber: null};

    if (resultArr.length) {
      resultObj.totalNumber = originArray.length;
      resultObj.keyword1 = resultArr[0];
      if (resultArr[1]) {
        resultObj.keyword2 = resultArr[1];
      }
      if (resultArr.length - 2 > 0) {
        resultObj.anotherWordsNumber = resultArr.length - 2;
      } 
    }
    // console.log('selectors.js, resultArr=', resultArr);
    // console.log('selectors.js, resultObj=', resultObj);
    return resultObj;
}
);



/*
const restaurantsSelector = (state) => state.restaurants.entities;
const productsSelector = (state) => state.products.entities;
const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;

const orderSelector = (state) => state.order.entities;

export const orderLoadingSelector = (state) => state.order.loading;
export const orderErrorSelector = (state) => state.order.error;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const productsLoadingSelector = (state, props) =>
  state.products.loading[props.restaurantId];
export const productsLoadedSelector = (state, props) =>
  state.products.loaded[props.restaurantId];

export const reviewsLoadingSelector = (state, props) =>
  state.reviews.loading[props.restaurantId];
export const reviewsLoadedSelector = (state, props) =>
  state.reviews.loaded[props.restaurantId];

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

const restaurantsIdsByProductsSelector = createSelector(
  restaurantsListSelector,
  (restaurants) =>
    restaurants
      .flatMap((rest) =>
        rest.menu.map((productId) => ({ productId, restId: rest.id }))
      )
      .reduce(
        (acc, { productId, restId }) => ({ ...acc, [productId]: restId }),
        {}
      )
);

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  restaurantsIdsByProductsSelector,
  (products, order, restaurantsIds) => {
    return Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
        restaurantId: restaurantsIds[product.id],
      }));
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const productAmountSelector = getById(orderSelector, 0);
export const productSelector = getById(productsSelector);
const reviewSelector = getById(reviewsSelector);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId] ?.name,
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  (_, { reviews }) => reviews,
  (reviews, ids) => {
    const ratings = ids.map((id) => reviews[id]?.rating || 0);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);

export const checkoutMatchPageSelector = createMatchSelector('/checkout');

export const orderDataSelector = createSelector(orderSelector, (order) =>
  Object.entries(order).map(([id, amount]) => ({ id, amount }))
);

*/
