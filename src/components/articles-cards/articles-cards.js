import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { loadCards, loadUserCards } from '../../redux/actions';
import styles from './articles-cards.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../images/not-found-icon.svg'
import cn from 'classnames';
import Article from '../article';
import {ART_FIXTURE} from '../../fixtures';
import { userCardsSelector, userCardsLoadingSelector, userCardsLoadedSelector, userCardsErrorSelector } from '../../redux/selectors'; 
import {URL_MAIN_API} from '../../config';
import MainApi from '../../api/main-api';
const mainApi = new MainApi(URL_MAIN_API);

function ArticlesCards({active, userCards, ...rest}) {
  // console.log('ArticlesCards, userCards=', userCards);
  useEffect(() => { 
    // loadUserCards();
  });

  return (    
    <section className={cn(styles['cards'], {[styles['cards_enabled']]: active})}>
    <div className={styles['cards__container']}>
      <div className={cn(styles['grid-cards'], styles['cards__grid-cards'])}>
       
      {Object.keys(userCards)
      .map((item) =>
       <Article key={item} data={userCards[item]} />)}

        {/* <Article  data={ART_FIXTURE} /> */}
       
      </div>
    </div>
  </section>

  );
}

const mapStateToProps = (state, props) => ({
  userCards: userCardsSelector(state),
  loading: userCardsLoadingSelector(state),
  loaded: userCardsLoadedSelector(state),
  error: userCardsLoadedSelector(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUserCards: () => dispatch(loadUserCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesCards);
