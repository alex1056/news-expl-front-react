// import './header.css';
import styles from './footer.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrcGitIcon from '../../images/git-icon.svg'
import imageSrcFbIcon from '../../images/fb-icon.svg'
import cn from 'classnames';

function Footer({active = false}) {
  return ( 
    <section className={styles.footer}>
    <div className={styles['footer__container']}>
      <p className={styles['footer__copyright']}>
        &copy; 2020 Supersite, Powered by News API
      </p>
      <ul className={cn(styles['nav'], styles['footer__nav'])}>
        <li className={cn(styles['nav__item'], styles['footer__nav-item'])}>
          <Link to="/" className={cn(styles['link'], styles['nav__link'], styles['footer__link'])}>Главная</Link>
        </li>
        <li className={cn(styles['nav__item'], styles['footer__nav-item'])}>
          <a
            href="https://praktikum.yandex.ru/"
            target="_blank"
            className={cn(styles['link'], styles['nav__link'], styles['footer__link'])}
            >Яндекс.Практикум</a
          >
        </li>
        <li className={cn(styles['nav__item'], styles['footer__nav-item'])}>
          <div className={styles['footer__icons-container']}>
            <a
              href="https://github.com/alex1056"
              target="_blank"
              className={cn(styles['link'], styles['nav__link'])}
            >
              <img
                src={imageSrcGitIcon}
                alt="Ссылка на GitHub"
                className={styles['footer__icon']}
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className={cn(styles['link'], styles['nav__link'])}
            >
              <img
                src={imageSrcFbIcon}
                alt="Ссылка на Facebook"
                className={styles['footer__icon']}
              />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>


  );
}

export default Footer;


  {/* //   <section className={cn(styles['not-found'], {[styles['not-found_enabled']]: active})}>
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
  // </section> */}