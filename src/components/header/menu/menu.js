// import './header.css';
import styles from './menu.module.css';
import { NavLink, Link } from "react-router-dom";
import cn from 'classnames';
import {UserContext} from '../../../user-context/user-context';
import { useState, useContext, useEffect } from 'react';
import {setUserData, getUserData} from '../../../utils/local-storage-handler';
import sleep from '../../../utils/sleep';
import MainApi from '../../../api/main-api';
import { URL_MAIN_API } from '../../../config';
const mainApi = new MainApi(URL_MAIN_API);



function Menu( {setPopupActiveState, userData, colorProp, mobileMenuActiveState}) {
  const { isLoggedIn } = userData;
  const { userContextSetState } = useContext(UserContext);
  // const [userName, userNameSetState] = useState(userData);
  // console.log('menu.js, mobileMenuActiveState=', mobileMenuActiveState);

const handleAuthBtn = () => {
  if (isLoggedIn) 
    {
      // alert('LogOut!');
      mainApi.logout()
      .then((res)=> {
        console.log('Logout=',res);
        sleep(500)
        .then(()=> {
        userContextSetState({ isLoggedIn: false, userName: 'Авторизоваться' });
        setUserData('userData', { isLoggedIn: false, userName: 'Авторизоваться' });
        setUserData('searchPhrase', null);
        window.location.reload();
      })
      })
      .catch((error)=>console.log('Logout Error=', error.message));
    
    }
    else {
      setPopupActiveState(true);   
    }
}

  return ( 
            <ul className={styles['header__menu']}>
              <li className={styles['header__menu-item']}>
              <NavLink exact to="/" activeClassName={cn({[styles['header__menu-item_selected']]: !mobileMenuActiveState})} className={cn(styles.link, styles['header__link'])}  
                  >Главная</NavLink> 
              </li>
              <li
                className={cn(styles['header__menu-item'], { [styles['header__menu-item_disabled']]: !isLoggedIn})} >
                <NavLink exact to="/articles" activeClassName={cn({[styles['header__menu-item_selected']]: !mobileMenuActiveState})} className={cn(styles.link, styles['header__link'])}  
                  >Сохраненные статьи</NavLink>    
              </li>

              
              <li onClick={()=>handleAuthBtn()}
              className={cn(styles['header__menu-item'], styles['auth-btn'], styles['header__auth-btn'], { [styles['auth-btn_theme_dark']]: colorProp === 'dark' && !mobileMenuActiveState})} >
                <Link to="#" className={cn(styles.link, styles['header__link'])}>
                  <p className={styles['auth-btn__name-text']}>
                  {userData.userName}
                  </p>
                  <div
                  
                    className={cn(styles['auth-btn__logout-icon'], {[styles['auth-btn__logout-icon_enabled']]: isLoggedIn}, { [styles['auth-btn__logout-icon_theme_dark']]: colorProp === 'dark'})}
                  ></div>
                </Link>
              </li>
            </ul>
  );
}

export default Menu;
