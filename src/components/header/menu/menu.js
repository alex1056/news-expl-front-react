// import './header.css';
import styles from './menu.module.css';
import { NavLink, Link } from "react-router-dom";
import cn from 'classnames';
import {UserContext} from '../../../user-context/user-context';
import { useState, useEffect } from 'react';


function Menu( {setPopupActiveState, userData}) {

  // const [userName, userNameSetState] = useState(userData);

useEffect(() => {
  // userNameSetState(<UserContext.Consumer>{({ userData }) => `${userData.userName ? userData.userName : 'Авторизоваться'}`}
  // </UserContext.Consumer>);
  // const newUserName = <UserContext.Consumer>{({ userData }) => `${userData.userName ? userData.userName : 'Авторизоваться'}`}
  //  </UserContext.Consumer>;
  //  console.log('useEffect, userData=', userData);
})


  return ( 
            <ul className={styles['header__menu']}>
              <li className={styles['header__menu-item']}>
              <NavLink to="/" activeClassName={styles['header__menu-item_selected']} className={cn(styles.link, styles['header__link'])}  id="indexpagelink"
                  >Главная</NavLink> 
              </li>
              <li
                className={cn(styles['header__menu-item'], { [styles['header__menu-item_disabled']]: true})} >
                <NavLink to="/articles" className={cn(styles.link, styles['header-link'])}  id="indexpagelink"
                  >Сохраненные статьи</NavLink>    
              </li>
              <li onClick={()=> setPopupActiveState(true)}
              className={cn(styles['header__menu-item'], styles['auth-btn'], styles['header__auth-btn'])} >
                <Link to="#" className={cn(styles.link, styles['header__link'])}>
                  {/* <p className={styles['auth-btn__name-text']}> Авторизоваться</p> */}
                  <p className={styles['auth-btn__name-text']}>
                  {/* <UserContext.Consumer>{({ userData }) => `${userData.userName ? userData.userName : 'Авторизоваться'}`}
                  </UserContext.Consumer> */}
                  {userData}
                  </p>
                  <div
                    className={cn(styles['auth-btn__logout-icon'], styles['auth-btn__logout-icon_theme_white'])}
                  ></div>
                </Link>
              </li>
            </ul>
  );
}

export default Menu;
