function setArrLocalStorage(itemName = 'newsData', arrJSON) {
  const arr = JSON.stringify(arrJSON);
  localStorage.setItem(itemName, arr);
}

function getArrLocalStorage(itemName = 'newsData') {
  const newsData = JSON.parse(localStorage.getItem(itemName));
  // console.log(newsData);
  return newsData;
}

function setUserData (itemName = 'userData', userData) {
  const userDataStr = JSON.stringify(userData);
  localStorage.setItem(itemName, userDataStr);
}

function getUserData (itemName = 'userData') {
  const userDataJSON = JSON.parse(localStorage.getItem(itemName));
  return userDataJSON;
}

module.exports = {setUserData, getUserData, setArrLocalStorage, getArrLocalStorage };
