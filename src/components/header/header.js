// import './header.css';
import styles from './header.module.css';
import HeaderLogo from '../ui/header-logo';
import HeaderMobileIcon from '../ui/header-mobile-icon';
import Menu from './menu';
import cn from 'classnames';


function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>      
          <HeaderLogo content={'NewsExplorer'} />    
          <HeaderMobileIcon type={'sandwich'}/>
          <div className={styles['header__menu-nav']}>
          <Menu />
          </div>
      </div>


      <div className={styles['header__mobile-menu']}>
      
          <nav
            className={cn(styles['header__mobile-menu-back'], { [styles['header__mobile-menu-back_no-authorized']]: true})}
          >
            <div className={styles['header__container']} >
            <HeaderLogo content={'NewsExplorer'} />  
              {/* <div class="header__mobile-icon">
                <div class="header__cross"></div>
              </div> */}
               <HeaderMobileIcon type={'cross'} />
            </div>

            <Menu />

          </nav>
        </div>





      </div>
  );
}

export default Header;
