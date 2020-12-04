import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../images/not-found-icon.svg'
import cn from 'classnames';
import { useEffect } from 'react';
import Header from '../header';
import About from '../about';
import ArticlesSummary from '../articles-summary';
import ArticlesCards from '../articles-cards';
// import Article from '../article';
import { loadUserCards } from '../../redux/actions';
import { connect } from 'react-redux';


  function ArticlesPageWrapper(props) {
  const {setPopupActiveState, loadUserCards, activePageState, setActivePageState} = props;
  

  useEffect(() => { 
    loadUserCards();
    if(activePageState !== 'articlesPage') {
      setActivePageState('articlesPage');
      // console.log('ArticlesPageWrapper, setActivePageState вызвали');
    }  
  });

  return (    
    <div>
    <Header setPopupActiveState={setPopupActiveState} colorProp={'dark'} />
    <ArticlesSummary />
    <ArticlesCards active={true} />

    </div>

  );
}


// const mapStateToProps = (state, props) => ({
//   userCards: userCardsSelector(state),
//   loading: userCardsLoadingSelector(state),
//   loaded: userCardsLoadedSelector(state),
//   error: userCardsLoadedSelector(state),
// });

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUserCards: () => dispatch(loadUserCards()),
});


export default connect(null, mapDispatchToProps)(ArticlesPageWrapper);
// export default ArticlesPageWrapper;


// const mapStateToProps = (state, props) => ({
//   userCards: userCardsSelector(state),
//   loading: userCardsLoadingSelector(state),
//   loaded: userCardsLoadedSelector(state),
//   error: userCardsLoadedSelector(state),
// });

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   loadUserCards: () => dispatch(loadUserCards()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ArticlesCards);
