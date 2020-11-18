import styles from './preloader.module.css';
import cn from 'classnames';

function Preloader({active = false}) {
  return ( 
    <section className={cn(styles['preloader-block'], {[styles['preloader-block_enabled']]: active})}>
    <div className={styles['preloader-block__container']}>
      <div className={styles['circle-preloader']}></div>      
      <p className={cn(styles['text'], styles['preloader-block__text'])}>Идет поиск новостей</p>
    </div>
  </section>
  );
}

export default Preloader;
