import {useState, useContext} from 'react';
import styles from './header.module.css';
import HeaderLogo from '../ui/header-logo';
import HeaderMobileIcon from '../ui/header-mobile-icon';
import Menu from './menu';
import cn from 'classnames';
import {UserContext} from '../../user-context/user-context';
import localStorageHandler from '../../utils/local-storage-handler';


function Header({setPopupActiveState, colorProp}) {
  const { userContextState } = useContext(UserContext); 
  const {isLoggedIn} = userContextState;
  // console.log('isLoggedIn=', isLoggedIn);
  // console.log('colorProp=', colorProp);
  const [mobileMenuActiveState, setStateMobileMenuActive] = useState(false);
  // console.log('mobileMenuActiveState=', mobileMenuActiveState);
  // console.log('setStateMobileMenuActive=', setStateMobileMenuActive);
  return (
    <div className={cn(styles['header'], {[styles['header_dark']]: colorProp === 'dark'}, {[styles['header_dark-bottom']]: colorProp === 'dark'})}>
      <div className={cn(styles['header__container'])}>      
          <HeaderLogo content={'NewsExplorer'} />    
          <HeaderMobileIcon colorProp={colorProp} type={'sandwich'} mobileMenuActiveState={mobileMenuActiveState} setStateMobileMenuActive={setStateMobileMenuActive}/>
          <div className={styles['header__menu-nav']}>
          <UserContext.Consumer>
            {({userContextState}) => <Menu colorProp={colorProp} setPopupActiveState={setPopupActiveState} userData={userContextState}/>}    
          </UserContext.Consumer>
          </div>
      </div>


      <div className={cn(styles['header__mobile-menu'], {[styles['header__mobile-menu_enabled']]: mobileMenuActiveState})}>    
          <nav
            className={cn(styles['header__mobile-menu-back'], { [styles['header__mobile-menu-back_no-authorized']]: !isLoggedIn})}
          >
            <div className={styles['header__container']} >
            <HeaderLogo content={'NewsExplorer'} />  
            <HeaderMobileIcon colorProp={colorProp} type={'cross'} mobileMenuActiveState={mobileMenuActiveState} setStateMobileMenuActive={setStateMobileMenuActive}/>
            </div>
            <UserContext.Consumer> 
            {({userContextState}) => <Menu colorProp={colorProp} setPopupActiveState={setPopupActiveState} userData={userContextState} mobileMenuActiveState={mobileMenuActiveState}/>}
          </UserContext.Consumer> 
          </nav>
        </div>

      </div>
  );
}

const handler = () => {
  console.log('Click!');
}


export default Header;
