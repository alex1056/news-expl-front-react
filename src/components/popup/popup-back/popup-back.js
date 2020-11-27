// import './header.css';
import styles from './popup-back.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../../images/close.svg'
import cn from 'classnames';
// import LoginForm from './login-form';
// import { useEffect } from 'react';
// import sleepWrap from '../../hocs/sleep'

function PopupBack({active = false, setPopupActive}) {
  // console.log(rest);
  return (    
   <div onClick={()=> setPopupActive(false)} className={cn(styles['popup-back'], {[styles['popup-back_is-opened']]:active})}>
     
    </div>
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

export default PopupBack;
