import './app.css';
import Header from '../header';
import About from '../about';
import Footer from '../footer';
import SearchWrapper from '../search-wrapper';
import Popup from '../popup';
import {useState} from 'react';
import {UserContext} from '../../user-context/user-context';
import {getUserData} from '../../utils/local-storage-handler';


function App() {
  const [popupActive, setPopupActiveState] = useState(false);
  const userDataFromSesStorage = getUserData('userData');
  const [userContextState, userContextSetState] = useState(userDataFromSesStorage ? userDataFromSesStorage : { isLoggedIn: false, userName: 'Авторизоваться' });
  const value={userContextState, userContextSetState};
  // console.log('App, getUserData=', getUserData('userData'));
  return (
    <div>
    <UserContext.Provider value={value}>   
    <Header setPopupActiveState={setPopupActiveState} />
    <main className='main'>
    <SearchWrapper />
    <About />
    <Footer />
    <Popup active={popupActive} setPopupActiveState={setPopupActiveState} />
    </main>
    </UserContext.Provider>
    </div>
  );
}

export default App;
