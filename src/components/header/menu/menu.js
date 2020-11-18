// import './header.css';
import styles from './menu.module.css';
import { NavLink, Link } from "react-router-dom";
import cn from 'classnames';

function Menu() {
  return ( 
            <ul className={styles['header__menu']}>
              <li className={styles['header__menu-item']}>
              <NavLink to="/" activeClassName={styles['header__menu-item_selected']} className={cn(styles.link, styles['header-link'])}  id="indexpagelink"
                  >Главная</NavLink> 
              </li>
              <li
                className={cn(styles['header__menu-item'], { [styles['header__menu-item_disabled']]: true})} >
                <NavLink to="/articles" className={cn(styles.link, styles['header-link'])}  id="indexpagelink"
                  >Сохраненные статьи</NavLink>    
              </li>
              <li 
              className={cn(styles['header__menu-item'], styles['auth-btn'], styles['header__auth-btn'])} >
                <Link to="#" className={cn(styles.link, styles['header-link'])}>
                  <p className={styles['auth-btn__name-text']}> Авторизоваться</p>
                  <div
                    className={cn(styles['auth-btn__logout-icon'], styles['auth-btn__logout-icon_theme_white'])}
                  ></div>
                </Link>
              </li>
            </ul>
  );
}

export default Menu;
