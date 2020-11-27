import './app.css';
import Header from '../header';
// import Search from '../search';
// import NotFound from '../not-found';
// import Preloader from '../preloader';
// import Result from '../result';
import About from '../about';
import Footer from '../footer';
import SearchWrapper from '../search-wrapper';
import Popup from '../popup';
import {useState} from 'react';

// import styles from './app.module.css';

function App() {
  const [popupActive, setPopupActive] = useState(false);
  return (
    <div>
    <Header setPopupActive={setPopupActive} />
    <main className='main'>
    <SearchWrapper />
    <About />
    <Footer />
    <Popup active={popupActive} setPopupActive={setPopupActive} />
    </main>
    </div>
  );
}

export default App;
