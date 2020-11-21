// import './header.css';
import styles from './result.module.css';
import { NavLink, Link } from "react-router-dom";
// import imageSrc from '../../images/not-found-icon.svg'
import cn from 'classnames';
import Article from '../article';

function Result() {
  return ( 
    <section className={cn(styles['result'], {[styles['result_enabled']]:true})}>
    <div className={styles['result__container']}>
      {/* <h2 className={cn(styles['content-title'], ['result__content-title'])}> */}
      <h2 className={cn(styles['content-title'], styles['result__content-title'])}>
        Результаты поиска
      </h2>
      <div className={cn(styles['grid-cards'], styles['result__grid-cards'])}>
      <Article />
      <Article />
      <Article />
      </div>
      <button className={cn(styles['button'], styles['result__btn'])}>Показать еще</button>
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

export default Result;
