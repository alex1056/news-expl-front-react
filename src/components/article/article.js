// import './header.css';
import styles from './article.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../images/img4.png'
import './css/card/card.css';
import './css/content-subtitle/content-subtitle.css';
import './css/text/text.css';
import cn from 'classnames';

function Article({_id='_id', link='link', keyword='keyword', image, date='date', title='title', text='text', source='source'}) {
  return ( 
<article id="articlecontainer" data-id={_id || 'no-id'}>
      <a href="${data.link}" target="_blank" className="card card__link" >
      <div className="card__tag">
        <p className="card__notification-text card__notification-text_tag">
        {keyword}
        </p>
      </div>
      <div className="card__save-article-container">
      <div className="card__notification">
          <p className="card__notification-text">
            Войдите, чтобы сохранять статьи
          </p>
        </div>
        <div className="card__article-btn"></div>
      </div>
      <div className="card__img-container">
      <img
        src={image || imageSrc}
        alt="Природа 1"
        className="card__img"
      />
      </div>
      <div className="card__text-container">
        <p className="card__date">{date}</p>
        <h3 className="content-subtitle card__content-subtitle">
        {title}
        </h3>
        <p className="text card__text">
        {text}
        </p>
        <p className="card__source">{source}</p>
      </div>
      </a>
    </article>




    // <article id="articlecontainer" data-id={_id || 'no-id'}>
     
    //   {console.log({styles})}
    //   <a href={link} target="_blank" className={cn(styles['card'], ['card__link'])} >
    //   <div className={styles['card__tag']}>
    //     <p className={cn(styles['card__notification-text'], ['card__notification-text_tag'])}>
    //     {keyword}
    //     </p>
    //   </div>
    //   <div className={styles['card__save-article-container']}>
    //   <div className={styles['card__notification']}>
    //       <p className={styles['card__notification-text']}>
    //         Войдите, чтобы сохранять статьи
    //       </p>
    //     </div>
    //     <div className={styles['card__article-btn']}></div>
    //   </div>
    //   <div className={styles['card__img-container']}>
    //   <img
    //     src={image}
    //     alt="Природа 1"
    //     className={styles['card__img']}
    //   />
    //   </div>
    //   <div className={styles['card__text-container']}>
    //     {/* <p class="card__date">${this.dateParsToWords(data.date)}</p> */}
    //     <p className={styles['card__date']}>{date}</p>
    //     <h3 className={cn(styles['content-subtitle'], ['card__content-subtitle'])}>
    //     {title}
    //     </h3>
    //     {/* <h3 class="content-subtitle card__content-subtitle">
    //     ${this.removeTags(data.title)}
    //     </h3> */}
    //     {/* <p class="text card__text">
    //     ${this.removeTags(data.text)}
    //     </p> */}
    //     <p className={cn(styles['text'], ['card__text'])}>
    //     {text}
    //     </p>
    //     <p className={styles['card__source']}>{source}</p>
    //   </div>
    //   </a>
    // </article>
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

export default Article;
