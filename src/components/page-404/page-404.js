// import './header.css';
import styles from './page-404.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../images/not-found-icon.svg'
import cn from 'classnames';
import { useEffect } from 'react';
// import sleepWrap from '../../hocs/sleep'
import Header from '../header';

function Page404({active = false}) {
  // console.log(sleepWrap);
  return ( 
    <div className={styles['page-404']}>
      <Header colorProp={'dark'}/>
    
    <div className={styles['page-404-wrapper']}>
    <section className={cn(styles['not-found'], {[styles['not-found_enabled']]: active})}>
    <div className={styles['not-found__container']}>
      <img
        src={imageSrc}
        alt="Изображение: Ничего не найдено"
        className={styles['not-found__icon']}
      />
      
      <h2 className={cn(styles['content-title'], styles['not-found__title'])}>Запрашиваемая страница не найдена</h2>
      <p className={cn(styles['text'], styles['not-found__text'])}>
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </div>
  </section>
  </div>
  </div>
  );
}

export default Page404;
