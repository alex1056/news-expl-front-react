import {UserContext} from '../../user-context/user-context';
import {NEWS_API} from '../../constants';
import {useState, useEffect, useContext} from 'react';
import { connect } from 'react-redux';
import { loadCards, loadUserCards, deleteCardFromSource } from '../../redux/actions';
import { cardsFromApiUserCardsSelector, userCardsSelector, userCardsLoadingSelector, userCardsLoadedSelector } from '../../redux/selectors'; 
import styles from './article.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../images/img4.png'
// import './css/card/card.css';
// import './css/content-subtitle/content-subtitle.css';
// import './css/text/text.css';
import cn from 'classnames';
import {URL_MAIN_API} from '../../config';
import convertData from '../../utils/convert-data'
import {dateParsToWords} from '../../redux/utils';
import MainApi from '../../api/main-api';
const mainApi = new MainApi(URL_MAIN_API);


function Article({...rest}) {
  const {loadUserCards, sourceData, loading, deleteCardFromSource } = rest;
  const articleObj = sourceData === NEWS_API ? convertData(rest.data) : rest.data;
  const {_id, link, keyword, image, date, title, text, source, userSaved} = articleObj;
  const [promptState, setPromptState] = useState(false);
  const { userContextState } = useContext(UserContext);
  const handlePromptObj = {userContextState, promptState, setPromptState};
  // console.log('article.js, articleObj=', articleObj);
  // console.log('article.js, rest=', rest);
// console.log('userContextState=', userContextState);

    return ( 
    <article data-id={_id || 'no-id'} className={styles['card-wrapper']}>
          <a href={link} target="_blank" className={cn(styles['card'], styles['card__link'])} >
          <div className={cn(styles['card__tag'], {[styles['card__tag_active']]: sourceData !== NEWS_API})}>
            <p className={cn(styles['card__notification-text'], styles['card__notification-text_tag'])}>
            {keyword}
            </p>
          </div>
          <div className={styles['card__save-article-container']}>
          <div className={cn(styles['card__notification'], {[styles['card__notification_enabled']]: promptState})}>
              <p className={styles['card__notification-text']}>
                Войдите, чтобы сохранять статьи
              </p>
            </div>
            <div onClick={(e)=>handleClick({e, articleObj, loadUserCards, userSaved, loading, sourceData, deleteCardFromSource, handlePromptObj})} 
            className={cn({[styles['card__remove-article-btn']]: sourceData !== NEWS_API}, {[styles['card__article-btn']]: sourceData === NEWS_API}, {[styles['card__save-article-btn_saved']]: userSaved && sourceData === NEWS_API})}>
            </div>
          </div>
          <div className={styles['card__img-container']}>
          <img
            src={image || imageSrc}
            alt="Природа 1"
            className={styles['card__img']}
          />
          </div>
          <div className={styles['card__text-container']}>
            <p className={styles['card__date']}>{dateParsToWords(date)}</p>
            <h3 className={cn(styles['content-subtitle'], styles['card__content-subtitle'])}>
            {title}
            </h3>
            <p className={cn(styles['text'], styles['card__text'])}>
            {text}
            </p>
            <p className={styles['card__source']}>{source}</p>
          </div>
          </a>
        </article>
      );
    }

    const handleClick = ({e, articleObj, loadUserCards, userSaved, loading, sourceData, deleteCardFromSource, handlePromptObj}) => {
      const {userContextState, promptState, setPromptState} = handlePromptObj;
      e.preventDefault();

      if(!userContextState.isLoggedIn) {
        setPromptState(!promptState);
        return;
      }


      if (sourceData !== NEWS_API) {
        const { _id } = articleObj;
        mainApi.deleteArticle(_id)
        .then((data) => {
          loadUserCards();
          deleteCardFromSource({article: articleObj});
          // console.log('Удалили объект=', data);
        } )
        .catch((error) => 
          console.log('article.js, handleClick=>error=', error.message)
      )
      return;
      }

      if (!userSaved && !loading) {
        mainApi.createArticle(articleObj)
          .then(()=> {
            loadUserCards();
        })
          .catch((error) => {
            console.log('article.js, handleClick=>error=', error.message);
        })
      }
    }

    const mapStateToProps = (state, props) => ({
      // userCards: cardsFromApiUserCardsSelector(state), 
      userCards: userCardsSelector(state), 
      loading: userCardsLoadingSelector(state),
      loaded: userCardsLoadedSelector(state),
     
    });

    const mapDispatchToProps = (dispatch, ownProps) => ({
      loadCards: (searchPhrase) => dispatch(loadCards(searchPhrase)),
      loadUserCards: () => dispatch(loadUserCards()),
      deleteCardFromSource: (article) => dispatch(deleteCardFromSource(article)),
    });

    export default connect(mapStateToProps, mapDispatchToProps)(Article);
