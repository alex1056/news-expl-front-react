// import './header.css';
import styles from './search-wrapper.module.css';
import { NavLink, Link } from "react-router-dom";
import cn from 'classnames';
import { connect } from 'react-redux';
import { loadCards } from '../../redux/actions';
import { useEffect } from 'react';
import { cardsFromApiSelector, 
  cardsFromApiLoadingSelector, 
  cardsFromApiLoadedSelector, 
  cardsFromApiErrorSelector } from '../../redux/selectors'; 
import { useState } from 'react';
import Search from '../search';
import NotFound from '../not-found';
import Preloader from '../preloader';
import Result from '../result';
// import SleepWrapper from '../sleep-wrapper';


function SearchWrapper(props) {
  const { cardsNewsApi, loading, loaded, error } = props;
  const cardsNewsApiLength = Object.keys(cardsNewsApi).length;
  const [searchPhrase, setSearchPhrase] = useState(null);
  const [showPreloader, setShowPreloader] = useState((loading || !loaded) && !!searchPhrase && !error);
  const [articlesNumber, setArticlesNumber] = useState(3);
//  console.log('SearchWrapper.js, props=', props);

  useEffect(() => {
    setTimeout(() => {      
      if(!!searchPhrase) {
      setShowPreloader((loading || !loaded) && !!searchPhrase && !error);
    }
    }, 500)
  });


  return ( 
    <div>
      <Search setSearchPhrase={setSearchPhrase}/>
      {!loading && !showPreloader && <NotFound active={error || ((loaded && !cardsNewsApiLength) && !showPreloader)} />}
       {/* {!loading &&  <NotFound active={showNotFound} />} */}
       {/* <Preloader active={(loading || !loaded) && searchPhrase} /> */}
       <Preloader active={showPreloader} />
      {loaded && cardsNewsApiLength > 0 && !showPreloader && <Result cardsNewsApi={cardsNewsApi} articlesNumber={articlesNumber} setArticlesNumber={setArticlesNumber} /> }
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  cardsNewsApi: cardsFromApiSelector(state),
  loading: cardsFromApiLoadingSelector(state),
  loaded: cardsFromApiLoadedSelector(state),
  error: cardsFromApiErrorSelector(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadCards: (searchPhrase) => dispatch(loadCards(searchPhrase)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchWrapper);
