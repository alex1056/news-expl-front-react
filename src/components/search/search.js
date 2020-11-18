// import './header.css';
import styles from './search.module.css';
import Button from '../ui/button';
import cn from 'classnames';

function Search() {
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
      <form className={styles['search__form']} name="new">
        <input
          required
          minLength="2"
          type="text"
          name="searchText"
          className={styles['search__input']}
          placeholder="Введите тему новости"
          id="searchinput"
        />
        <Button classNameProp={'search__button'}>Искать</Button>
        {/* <button type="submit" className={cn(styles['button'], styles['search__button'])}>
          Искать
        </button> */}
      </form>
    </div>
  </section>




    // <div className={styles.header}>
    //   <div className={styles.header__container}>      
    //       <HeaderLogo content={'NewsExplorer'} />    
    //       <HeaderMobileIcon type={'sandwich'}/>
    //       <div className={styles['header__menu-nav']}>
    //       <Menu />
    //       </div>
    //   </div>


    //   <div className={styles['header__mobile-menu']}>
      
    //       <nav
    //         className={cn(styles['header__mobile-menu-back'], { [styles['header__mobile-menu-back_no-authorized']]: true})}
    //       >
    //         <div className={styles['header__container']} >
    //         <HeaderLogo content={'NewsExplorer'} />  
    //           {/* <div class="header__mobile-icon">
    //             <div class="header__cross"></div>
    //           </div> */}
    //            <HeaderMobileIcon type={'cross'} />
    //         </div>

    //         <Menu />

    //       </nav>
    //     </div>





    //   </div>
  );
}

export default Search;
