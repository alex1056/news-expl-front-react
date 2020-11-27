// import './header.css';
import styles from './popup.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../images/close.svg'
import cn from 'classnames';
import LoginForm from './login-form';
import PopupBack from './popup-back';
import RegistrForm from './registr-form';
import SuccessForm from './success-form';
// import { useEffect } from 'react';
// import sleepWrap from '../../hocs/sleep'
import { useState } from 'react';

function Popup({active = false, setPopupActive}) {
  const [activeFormState, setActiveFormState] = useState({loginForm: true, registrForm: false, successForm: false});
  return (    
<div>
{/* {console.log('activeFormState=', activeFormState)} */}
  <div id="popup" className={cn(styles['popup'], {[styles['popup_is-opened']]:active})}>
      <div className={styles['popup__content']}>
      <img onClick={()=> setPopupActive(false)} id="closebtn" src={imageSrc} alt="Закрыть попап" className={styles['popup__close']} />
        <div className={styles['popup__place-content']}>
        {activeFormState.loginForm && <LoginForm activeFormState={activeFormState} setActiveFormState={setActiveFormState} />}
        {activeFormState.registrForm && <RegistrForm activeFormState={activeFormState} setActiveFormState={setActiveFormState} />}
        {activeFormState.successForm && <SuccessForm activeFormState={activeFormState} setActiveFormState={setActiveFormState} />}
        </div>
      </div>  
      <PopupBack active={active} setPopupActive={setPopupActive} /> 
    </div>
</div>
  );
}

export default Popup;
