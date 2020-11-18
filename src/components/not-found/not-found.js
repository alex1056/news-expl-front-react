// import './header.css';
import styles from './not-found.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../images/not-found-icon.svg'
import cn from 'classnames';

function NotFound({active = false}) {
  return ( 

    <section className={cn(styles['not-found'], {[styles['not-found_enabled']]: active})}>
    <div className={styles['not-found__container']}>
      <img
        src={imageSrc}
        alt="Изображение: Ничего не найдено"
        className={styles['not-found__icon']}
      />
      <h2 className={cn(styles['content-title'], styles['not-found__title'])}>Ничего не найдено</h2>
      <p className={cn(styles['text'], styles['not-found__text'])}>
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </div>
  </section>
  );
}

export default NotFound;
