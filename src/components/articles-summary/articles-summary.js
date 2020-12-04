// import './header.css';
import styles from './articles-summary.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../images/not-found-icon.svg'
import cn from 'classnames';
import { useEffect } from 'react';
import { loadUserCards } from '../../redux/actions';
import { connect } from 'react-redux';
import { userCardsSelector, userCardsLoadingSelector, userCardsLoadedSelector, userCardsErrorSelector } from '../../redux/selectors'; 

function ArticlesSummary(props) {
// console.log('articles-summary.js, props=', props);

  return (    

    <section className={styles['articles-summary']}>
          <div className={styles['articles-summary__container']}>
            <h1 className={styles['articles-summary__title']}>Сохраненные статьи</h1>
            <h2 className={cn(styles['content-title'], styles['articles-summary__subtitle'])}>
              Грета, у вас 5 сохранённых статей
            </h2>
          </div>
    </section>    
  //   <section className={cn(styles['not-found'], {[styles['not-found_enabled']]: active})}>
  //   <div className={styles['not-found__container']}>
  //     <img
  //       src={imageSrc}
  //       alt="Изображение: Ничего не найдено"
  //       className={styles['not-found__icon']}
  //     />
  //     <h2 className={cn(styles['content-title'], styles['not-found__title'])}>Ничего не найдено</h2>
  //     <p className={cn(styles['text'], styles['not-found__text'])}>
  //       К сожалению по вашему запросу ничего не найдено.
  //     </p>
  //   </div>
  // </section>
  );
}

// export default ArticlesSummary;
const mapStateToProps = (state, props) => ({
  userCards: userCardsSelector(state),
  loading: userCardsLoadingSelector(state),
  loaded: userCardsLoadedSelector(state),
  error: userCardsLoadedSelector(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUserCards: () => dispatch(loadUserCards()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ArticlesSummary);
