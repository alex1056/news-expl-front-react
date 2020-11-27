// import './header.css';
import styles from './result.module.css';
import { NavLink, Link } from "react-router-dom";
import cn from 'classnames';
import Article from '../article';
import { connect } from 'react-redux';
import { loadCards } from '../../redux/actions';
import { useEffect } from 'react';
import { cardsFromApiSelector, cardsFromApiLoadingSelector, cardsFromApiLoadedSelector } from '../../redux/selectors'; 

function Result(props) {
  const { loadCards, cardsNewsApi, articlesNumber, setArticlesNumber } = props;
const articlesToShow = Object.keys(cardsNewsApi).map((cardId) =>
cardsNewsApi[cardId]).slice(0, articlesNumber);
 
// console.log('articlesToShow=', articlesToShow);
//   useEffect(() => {
//   const { loadCards } = props;
//   // console.log(loadCards);
//   loadCards({searchPhrase:'зима'});
// });
  return ( 
    <section className={cn(styles['result'], {[styles['result_enabled']]:true})}>
      {/* {console.log('props=',props)} */}
    <div className={styles['result__container']}>
      {/* <h2 className={cn(styles['content-title'], ['result__content-title'])}> */}
      <h2 className={cn(styles['content-title'], styles['result__content-title'])}>
        Результаты поиска
      </h2>
      <div className={cn(styles['grid-cards'], styles['result__grid-cards'])}>
     {/* {Object.keys(cardsNewsApi).map((cardId) =>
       <Article key={cardId} data={cardsNewsApi[cardId]} />)} */}
       {articlesToShow.map((item) =>
       <Article key={item.url} data={item} />)}
      </div>
      <button onClick={() => setArticlesNumber(articlesNumber + 3)} className={cn(styles['button'], styles['result__btn'])}>Показать еще</button>
    </div>
  </section>

  );
}

const mapStateToProps = (state, props) => ({
  cardsNewsApi: cardsFromApiSelector(state),
  loading: cardsFromApiLoadingSelector(state),
  loaded: cardsFromApiLoadedSelector(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadCards: (searchPhrase) => dispatch(loadCards(searchPhrase)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
