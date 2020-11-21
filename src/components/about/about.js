// import './header.css';
import styles from './about.module.css';
import { NavLink, Link } from "react-router-dom";
import imageBigSrc from '../../images/ab-1000.png';
import imageSmallSrc from '../../images/ab-500.png';
import cn from 'classnames';
// import stylesContentTitle from '../../library.blocks/content-title/content-title.module.css';
// import stylesContentTitle from './contenttitle.module.css';
// import stylesText from '../../library.blocks/text/text.module.css';
// import '../../library.blocks/content-title/content-title.css';

// const styles = {...stylesAbout, ...stylesContentTitle, ...stylesText }
// const stylesGlobal = cn({stylesContentTitle}, {stylesText});
// const stylesGlobal = stylesContentTitle;

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
      {console.log('styles:',styles)}
        {/* <h3 className={cn(styles['content-title'], styles['about__content-title'])}>Об авторе</h3> */}
        <h3 className={cn(styles['content-title'], styles['about__content-title'])}>Об авторе</h3>
        <p className={cn(styles['text'], styles['about__text'])}>
          Это блок с описанием автора проекта. Здесь следует указать, как
          вас зовут, чем вы занимаетесь, какими технологиями разработки
          владеете.
        </p>
        <p className={cn(styles['text'], styles['about__text'])}>
          Также можно рассказать о процессе обучения в Практикуме, чему вы
          тут научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </div>
  </section>
  );
}

export default About;
