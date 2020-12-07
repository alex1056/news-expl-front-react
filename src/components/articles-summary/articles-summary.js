import styles from './articles-summary.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../images/not-found-icon.svg'
import cn from 'classnames';
import { useEffect, useContext } from 'react';
import { loadUserCards } from '../../redux/actions';
import { connect } from 'react-redux';
import { userCardsSelector, userCardsLoadingSelector, userCardsLoadedSelector, userCardsErrorSelector, userCardsSummarySelector } from '../../redux/selectors'; 
import {UserContext} from '../../user-context/user-context';
import ArticlesDetail from './articles-detail';


function ArticlesSummary({userCardsSummary}, ...props) {
  const { userContextState } = useContext(UserContext); 
  const {userName} = userContextState;
// console.log('articles-summary.js, userName=', userName);
  // console.log('articles-summary.js, userCardsSummary=', userCardsSummary);
  return (    

    <section className={styles['articles-summary']}>
          <div className={styles['articles-summary__container']}>
            <h1 className={styles['articles-summary__title']}>Сохраненные статьи</h1>
            <h2 className={cn(styles['content-title'], styles['articles-summary__subtitle'])}>
            {userName || 'NoAuth'}, у вас {userCardsSummary.totalNumber|| 'нет'} сохранённых статей
            </h2>
            <ArticlesDetail />
          </div>
    </section>    

  );
}

// export default ArticlesSummary;
const mapStateToProps = (state, props) => ({
  userCards: userCardsSelector(state),
  loading: userCardsLoadingSelector(state),
  loaded: userCardsLoadedSelector(state),
  error: userCardsLoadedSelector(state),
  userCardsSummary: userCardsSummarySelector(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUserCards: () => dispatch(loadUserCards()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ArticlesSummary);
