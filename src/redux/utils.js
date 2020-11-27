import { createSelector } from 'reselect';

export const arrToMap = (arr, searchPhrase) =>
  arr.reduce((acc, item) => {
    item['searchPhrase'] = searchPhrase;
    return { ...acc, [item.url]: item }
  }, 
    {});

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