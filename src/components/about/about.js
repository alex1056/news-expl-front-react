import styles from './about.module.css';
import { NavLink, Link } from "react-router-dom";
import imageBigSrc from '../../images/ab-1000.png';
import imageSmallSrc from '../../images/ab-500.png';
import cn from 'classnames';

function About({active = false}) {
  return ( 
    <section className={styles.about}>
    <div className={styles['about__container']}>
      <div className={styles['about__img-container']}>
        <picture className={styles['about__img']}>
          <source
            srcSet={imageBigSrc}
            media="(-webkit-min-device-pixel-ratio: 2),
          (min-resolution: 192dpi)"
          />

          <img
            src={imageSmallSrc}
            className={styles['about__img']}
            alt="Александр Б."
          />
        </picture>
      </div>
      <div className={styles['about__text-container']}>
        <h3 className={cn(styles['content-title'], styles['about__content-title'])}>О проекте</h3>
        <p className={cn(styles['text'], styles['about__text'])}>
        Поиск новостей по ключевому слову с возможностью сохранения понравившихся.
        </p>
        <p className={cn(styles['text'], styles['about__text'])}>
        Технологии
        </p>
        <ul className={cn(styles['text'], styles['about__text'], styles['about__text_ul'])}>
          <li className={cn(styles['text'], styles['about__text'], styles['about__text_li'])}>Frontend: React, Redux</li>
          <li className={cn(styles['text'], styles['about__text'], styles['about__text_li'])}>Backend: Express, MongoDb</li>
          </ul>

        <p className={cn(styles['text'], styles['about__text'])}>
        Frontend использует httpOnly cookie и корректная работа возможна в браузерах с поддержкой данной возможности.
        </p>
      </div>
    </div>
  </section>
  );
}

export default About;
