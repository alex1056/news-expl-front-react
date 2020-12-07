import styles from './articles-detail.module.css';
import cn from 'classnames';
import { useEffect, useContext } from 'react';
// import { loadUserCards } from '../../redux/actions';
import { connect } from 'react-redux';
import { userCardsSelector, userCardsLoadingSelector, userCardsLoadedSelector, userCardsErrorSelector, userCardsSummarySelector } from '../../../redux/selectors'; 

function ArticlesDetail({userCardsSummary}, ...props) {
  // const { userContextState } = useContext(UserContext); 
  // const {userName} = userContextState;
// console.log('articles-summary.js, userName=', userName);
  // console.log('articles-summary.js, userCardsSummary=', userCardsSummary);
  return (     
    <p className={cn(styles['text'], styles['articles-summary__text'])}>
      <span>По ключевым словам:&nbsp;</span><span className={cn(styles['text'], styles['text_bold'])}>{userCardsSummary.keyword1 || ''}{userCardsSummary.keyword2 && `, ${userCardsSummary.keyword2}` || ''}{userCardsSummary.anotherWordsNumber && ` и ${userCardsSummary.anotherWordsNumber} другим` || ''}
      </span>
      </p>
  );
}


const mapStateToProps = (state, props) => ({
  userCardsSummary: userCardsSummarySelector(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // loadUserCards: () => dispatch(loadUserCards()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ArticlesDetail);
