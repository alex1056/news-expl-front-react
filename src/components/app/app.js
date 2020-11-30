import './app.css';
import Header from '../header';
import About from '../about';
import Footer from '../footer';
import SearchWrapper from '../search-wrapper';
import Popup from '../popup';
import {useState} from 'react';
import {UserContext} from '../../user-context/user-context';
import {getUserData} from '../../utils/local-storage-handler';


// import styles from './app.module.css';

function App() {
  const [popupActive, setPopupActiveState] = useState(false);
  const [userContextState, userContextSetState] = useState({ isLoggedIn: false, userName: 'Авторизоваться' });
  const value={userContextState, userContextSetState};
  return (
    <div>
    <UserContext.Provider value={value}>
      {/* {console.log('from App, value=', value)} */}
      {/* {userContextSetState({userData: { isLoggedIn: false, userName: 'defaultNameApp1' }})} */}
      {/* {console.log('from App, после изм. состояния value=', value)} */}
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
