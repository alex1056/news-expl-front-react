// import './header.css';
import {NEWS_API} from '../../constants';
import styles from './result.module.css';
import { NavLink, Link } from "react-router-dom";
import cn from 'classnames';
import Article from '../article';
import { connect } from 'react-redux';
import { loadCards, loadUserCards } from '../../redux/actions';
import { useEffect, useContext } from 'react';
import { cardsFromApiSelector, cardsFromApiLoadingSelector, cardsFromApiLoadedSelector } from '../../redux/selectors'; 
import { userCardsSelector, userCardsLoadingSelector, userCardsLoadedSelector, userCardsErrorSelector } from '../../redux/selectors'; 
import { cardsFromApiUserCardsSelector } from '../../redux/selectors'; 
import {UserContext} from '../../user-context/user-context';

function Result(props) {
  const { loadCards, loadUserCards, cardsNewsApi, userCards, cardsNewsApiAndUsers, articlesNumber, setArticlesNumber } = props;
  const articlesToShow = Object.keys(cardsNewsApiAndUsers).map((cardId) =>
  cardsNewsApiAndUsers[cardId]).slice(0, articlesNumber);
  // const { userContextState } = useContext(UserContext);

  // console.log('results.js, cardsNewsApiAndUsers=',cardsNewsApiAndUsers);
  // const articlesToShow = Object.keys(cardsNewsApi).map((cardId) =>
  // cardsNewsApi[cardId]).slice(0, articlesNumber);

  useEffect(()=>{
    // console.log('result.js, userCards=',userCards);
    // if(userContextState.isLoggedIn) {
      // loadUserCards();
    // }
        // console.log('results.js, cardsNewsApi=, userCards=', cardsNewsApi, userCards);
  })

  return ( 
    <section className={cn(styles['result'], {[styles['result_enabled']]:true})}>
      
    <div className={styles['result__container']}>
      
      <h2 className={cn(styles['content-title'], styles['result__content-title'])}>
        Результаты поиска
      </h2>
      <div className={cn(styles['grid-cards'], styles['result__grid-cards'])}>
       {articlesToShow.map((item) =>
       <Article key={item.url} data={item} sourceData={NEWS_API}/>)}
      </div>
      <button onClick={() => setArticlesNumber(articlesNumber + 3)} className={cn(styles['button'], styles['result__btn'])}>Показать еще</button>
    </div>
  </section>

  );
}

const mapStateToProps = (state, props) => ({
  cardsNewsApi: cardsFromApiSelector(state),
  cardsNewsApiAndUsers: cardsFromApiUserCardsSelector(state),
  loading: cardsFromApiLoadingSelector(state),
  loaded: cardsFromApiLoadedSelector(state),

  userCards: userCardsSelector(state),
  // loading: userCardsLoadingSelector(state),
  // loaded: userCardsLoadedSelector(state),
  error: userCardsLoadedSelector(state),

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadCards: (searchPhrase) => dispatch(loadCards(searchPhrase)),
  loadUserCards: ()=> dispatch(loadUserCards())
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
