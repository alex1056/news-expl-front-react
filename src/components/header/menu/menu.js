// import './header.css';
import styles from './menu.module.css';
import { NavLink, Link } from "react-router-dom";
import cn from 'classnames';
import {UserContext} from '../../../user-context/user-context';
import { useState, useContext, useEffect } from 'react';
import {setUserData} from '../../../utils/local-storage-handler';
import sleep from '../../../utils/sleep';


function Menu( {setPopupActiveState, userData}) {
  const { isLoggedIn } = userData;
  const { userContextSetState } = useContext(UserContext);
  // const [userName, userNameSetState] = useState(userData);

useEffect(() => {
  // userNameSetState(<UserContext.Consumer>{({ userData }) => `${userData.userName ? userData.userName : 'Авторизоваться'}`}
  // </UserContext.Consumer>);
  // const newUserName = <UserContext.Consumer>{({ userData }) => `${userData.userName ? userData.userName : 'Авторизоваться'}`}
  //  </UserContext.Consumer>;
  //  console.log('useEffect, userData=', userData);
  //  console.log('useEffect, isLoggedIn=', isLoggedIn);
})

const handleAuthBtn = () => {
  if (isLoggedIn) 
    {
      // alert('LogOut!');
      sleep(500)
        .then(()=> {
        userContextSetState({ isLoggedIn: false, userName: 'Авторизоваться' });
        setUserData('userData', { isLoggedIn: false, userName: 'Авторизоваться' });
        })
    }
    else {
      setPopupActiveState(true);
    }
}

  return ( 
            <ul className={styles['header__menu']}>
              <li className={styles['header__menu-item']}>
              <NavLink to="/" activeClassName={styles['header__menu-item_selected']} className={cn(styles.link, styles['header__link'])}  id="indexpagelink"
                  >Главная</NavLink> 
              </li>
              <li
                className={cn(styles['header__menu-item'], { [styles['header__menu-item_disabled']]: !isLoggedIn})} >
                <NavLink to="/articles" className={cn(styles.link, styles['header__link'])}  id="indexpagelink"
                  >Сохраненные статьи</NavLink>    
              </li>
              <li onClick={()=>handleAuthBtn()}
              className={cn(styles['header__menu-item'], styles['auth-btn'], styles['header__auth-btn'])} >
                <Link to="#" className={cn(styles.link, styles['header__link'])}>
                  <p className={styles['auth-btn__name-text']}>
                  {userData.userName}
                  </p>
                  <div
                    className={cn(styles['auth-btn__logout-icon'], styles['auth-btn__logout-icon_theme_white'], {[styles['auth-btn__logout-icon_enabled']]: isLoggedIn})}
                  ></div>
                </Link>
              </li>
            </ul>
  );
}

export default Menu;
