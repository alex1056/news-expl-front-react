import './app.css';
// import Header from '../header';
// import About from '../about';
// import SearchWrapper from '../search-wrapper';
import { Route, Switch, Redirect } from 'react-router-dom';
import IndexPageWrapper from '../index-page-wrapper';
import ArticlesPageWrapper from '../articles-page-wrapper';
import Page404 from '../page-404';
import Footer from '../footer';
import Popup from '../popup';
import {useState} from 'react';
import {UserContext} from '../../user-context/user-context';
import {getUserData} from '../../utils/local-storage-handler';


function App() {
  const [popupActive, setPopupActiveState] = useState(false);
  const [activePageState, setActivePageState] = useState('indexPage');
  const userDataFromSesStorage = getUserData('userData');
  const [userContextState, userContextSetState] = useState(userDataFromSesStorage ? userDataFromSesStorage : { isLoggedIn: false, userName: 'Авторизоваться' });
  const value={userContextState, userContextSetState};
  // console.log('App, getUserData=', getUserData('userData'));
  return (
    <div>
    <UserContext.Provider value={value}>   
    <main className='main'>
    <Switch>
      {!userContextState.isLoggedIn && <Redirect from="/articles" to="/" />}     
      <Route exact path="/articles" render={(props) => <ArticlesPageWrapper {...props} setPopupActiveState={setPopupActiveState} activePageState={activePageState} setActivePageState={setActivePageState} />} />
      <Route exact path="/" render={(props) => <IndexPageWrapper {...props} setPopupActiveState={setPopupActiveState} activePageState={activePageState} setActivePageState={setActivePageState} />} />
      <Route component={Page404} />
    {/* <IndexPageWrapper setPopupActiveState={setPopupActiveState}/> */}
    </Switch>
    <Footer />
    </main>
    <Popup active={popupActive} setPopupActiveState={setPopupActiveState} />
    
    </UserContext.Provider>
    </div>
  );
}

export default App;
