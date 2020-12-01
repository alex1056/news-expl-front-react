function setArrsessionStorage(itemName = 'newsData', arrJSON) {
  const arr = JSON.stringify(arrJSON);
  sessionStorage.setItem(itemName, arr);
}

function getArrsessionStorage(itemName = 'newsData') {
  const newsData = JSON.parse(sessionStorage.getItem(itemName));
  // console.log(newsData);
  return newsData;
}

function setUserData (itemName = 'userData', userData) {
  const userDataStr = JSON.stringify(userData);
  sessionStorage.setItem(itemName, userDataStr);
}

function getUserData (itemName = 'userData') {
  const userDataJSON = JSON.parse(sessionStorage.getItem(itemName));
  return userDataJSON;
}

module.exports = {setUserData, getUserData, setArrsessionStorage, getArrsessionStorage };
