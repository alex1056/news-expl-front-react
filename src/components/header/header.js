// import './header.css';
import styles from './header.module.css';
import HeaderLogo from '../ui/header-logo';
import HeaderMobileIcon from '../ui/header-mobile-icon';
import Menu from './menu';
import cn from 'classnames';
import {UserContext} from '../../user-context/user-context';


function Header({setPopupActiveState, colorProp}) {
  // console.log('colorProp=', colorProp);
  return (
    <div className={cn(styles['header'], {[styles['header_dark']]: colorProp === 'dark'}, {[styles['header_dark-bottom']]: colorProp === 'dark'})}>
      <div className={cn(styles['header__container'])}>      
          <HeaderLogo content={'NewsExplorer'} />    
          <HeaderMobileIcon type={'sandwich'}/>
          <div className={styles['header__menu-nav']}>
          <UserContext.Consumer>
            {({userContextState}) => <Menu colorProp={colorProp} setPopupActiveState={setPopupActiveState} userData={userContextState}/>}    
          </UserContext.Consumer>
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
             <UserContext.Consumer> 
            {({userContextState}) => <Menu colorProp={colorProp} setPopupActiveState={setPopupActiveState} userData={userContextState}/>}
          </UserContext.Consumer> 
          </nav>
        </div>

      </div>
  );
}

export default Header;
