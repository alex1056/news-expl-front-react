// import './header.css';
import styles from './header-logo.module.css';
import { NavLink } from "react-router-dom";

function HeaderLogo({content}) {
  return (
  <NavLink to="/" className={styles['header-logo']}>{content}</NavLink>
   
  );
}

export default HeaderLogo;
