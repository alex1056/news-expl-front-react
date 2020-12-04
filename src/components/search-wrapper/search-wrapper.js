import styles from './search-wrapper.module.css';
// import { NavLink, Link } from "react-router-dom";
// import cn from 'classnames';
import { connect } from 'react-redux';
import { loadCards, loadUserCards } from '../../redux/actions';
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
// import {UserContext} from '../../user-context/user-context';
import {setUserData, getUserData } from '../../utils/local-storage-handler';

function SearchWrapper(props) {
//  console.log('SearchWrapper, props=', props);
  const { cardsNewsApi, loading, loaded, error, loadUserCards, loadCards, activePageState, setActivePageState } = props;
  const cardsNewsApiLength = Object.keys(cardsNewsApi).length;
  const searchPhraseSaved = cardsNewsApiLength > 0 ? getUserData('searchPhrase') : {searchPhrase: ''};
  const [searchPhrase, setSearchPhrase] = useState(searchPhraseSaved);
  const [showPreloader, setShowPreloader] = useState((loading && !loaded) && !error);
  const [articlesNumber, setArticlesNumber] = useState(3);
  // const { userContextState } = useContext(UserContext);
  // console.log('SearchWrapper, cardsNewsApi=', Object.keys(cardsNewsApi).length);

useEffect(() => { 
  // if(activePageState !== 'indexPage') {
  //   setActivePageState('indexPage');    
  // }  

    setTimeout(() => {      
      // if(!!searchPhrase) {
      setShowPreloader((loading && !loaded) && !error);
      // setShowPreloader((loading || !loaded) && !!searchPhrase && !error);
    // }
    }, 500);
  });


  return ( 
    <div>
      <Search searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase}/>
      {!loading && !showPreloader && <NotFound active={error || ((loaded && !cardsNewsApiLength) && !showPreloader)} />}   
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
  loadUserCards: () => dispatch(loadUserCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchWrapper);
