// import './header.css';
import styles from './popup-back.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../../images/close.svg'
import cn from 'classnames';
// import {setUserData} from '../../../utils/local-storage-handler';
// import LoginForm from './login-form';
// import { useEffect } from 'react';
// import sleepWrap from '../../hocs/sleep'

function PopupBack({active = false, setPopupActiveState}) {
  // console.log(rest);
  return (    
   <div onClick={()=> setPopupActiveState(false)} className={cn(styles['popup-back'], {[styles['popup-back_is-opened']]:active})}>
  {/* // <div onClick={()=> setUserData('popupState', {active: false})} className={cn(styles['popup-back'], {[styles['popup-back_is-opened']]:active})}>    */}
    </div>
  );
}

export default PopupBack;
