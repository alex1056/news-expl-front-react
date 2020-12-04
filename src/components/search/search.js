// import './header.css';
import styles from './search.module.css';
import Button from '../ui/button';
import cn from 'classnames';
import SearchForm from './search-form';

function Search({searchPhrase, setSearchPhrase}) {
  return (
    <section className={styles['search']}>
    <div className={styles['search__container']}>
      <div className={styles['search__title-subtitle-cont']}>
        <h1 className={cn(styles['content-title'], styles['search__content-title'])}>
          Что в мире творится?
        </h1>
        <p className={cn(styles['text'], styles['search__text'])}>
        {/* <p className={cn(styles['search__text'])}> */}
          Находите самые свежие статьи на любую тему и сохраняйте в своём
          личном кабинете.
        </p>
      </div>

      <SearchForm searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase}/>

    </div>
  </section>

  );
}

export default Search;
