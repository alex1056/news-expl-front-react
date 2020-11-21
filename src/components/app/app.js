import './app.css';
import Header from '../header';
import Search from '../search';
import NotFound from '../not-found';
import Preloader from '../preloader';
import Result from '../result';
import About from '../about';

// import styles from './app.module.css';

function App() {
  return (
    <div>
    <Header />
    <main className='main'>
    <Search />
    <NotFound active={false} />
    <Preloader active={false} />
  <Result />
  <About />
    </main>
    </div>
  );
}

export default App;
