import { createSelector } from 'reselect';

export const arrToMap = (arr, searchPhrase) =>
  arr.reduce((acc, item) => {
    item['searchPhrase'] = searchPhrase;
    return { ...acc, [item.url]: item }
  }, 
    {});

export const arrToMapUserCards = (arr) =>
  arr.reduce((acc, item) => {
    // item['searchPhrase'] = searchPhrase;
    return { ...acc, [item.link]: item }
   }, 
    {});

export const deleteCard = (entities, article) => 
 {
  // console.log('1) cards-from-api.js: delete card state=', entities, article);
  delete entities[article.link];
  // console.log('2) cards-from-api.js: delete card state=', entities, article);
  return entities;
 }
   

export const getById = (selector, defaultValue) =>
  createSelector(
    selector,
    (_, props) => props.id,
    (entity, id) => entity[id] || defaultValue
  );

 export const fromToDates = () => {
    let result;
    let dateFrom = '';
    let dateTo = '';
    result = Date.now();
    result = new Date(result);

    dateTo += result.getFullYear();
    dateTo += result.getMonth() < 9 ? `-0${result.getMonth() + 1}` : `-${result.getMonth() + 1}`;
    dateTo += result.getDate() < 10 ? `-0${result.getDate()}` : `-${result.getDate()}`;

    result = Date.now() - (60 * 60 * 24 * 1000 * 7);
    result = new Date(result);
    dateFrom = '';
    dateFrom += result.getFullYear();
    dateFrom += result.getMonth() < 9 ? `-0${result.getMonth() + 1}` : `-${result.getMonth() + 1}`;
    dateFrom += result.getDate() < 10 ? `-0${result.getDate()}` : `-${result.getDate()}`;

    return { from: dateFrom, to: dateTo };
  }

  export const dateToWords = (dateMs) => {
    let dateStr = '';
    const dateObj = new Date(dateMs);

    if (dateObj !== 'Invalid Date') {
      const monthA = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
      const month = monthA[dateObj.getMonth()];
      dateStr = `${dateObj.getDate()} ${month}, ${dateObj.getFullYear()}`;
    }
    return dateStr || '1 января 1900';
  }

  export const dateParsToWords = (dateString) => {
    const ms = Date.parse(dateString);
    return dateToWords(ms);
    
  }

  export const keyWordsSummary = (originArray) => {
    try {
      return originArray.reduce((accum, item) => {
        if (!accum[item.keyword]) accum[item.keyword] = 1;
        else accum[item.keyword] += 1;
        return accum;
      }, {});
    } catch (error) {
      console.log('Не задан начальный массив для построения схемы по keyword');
      return null;
    }
  }

  export const sortOriginArray = (originArray) => {
    const schemeObj = keyWordsSummary(originArray);
    // console.log('schemeObj, schemeObj=', schemeObj);
    let result;
    const arr = Object.keys(schemeObj).sort((a, b) => {
        result = schemeObj[b] - schemeObj[a];
        return result;
      });
      // console.log('arr, arr=', arr);
    return arr;
  }