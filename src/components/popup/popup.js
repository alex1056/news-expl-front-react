// import './header.css';
import styles from './popup.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../images/close.svg'
import cn from 'classnames';
import LoginForm from './login-form';
import PopupBack from './popup-back';
import RegistrForm from './registr-form';
import SuccessForm from './success-form';
import { useState } from 'react';

// import { connect } from 'react-redux';
// import { login } from '../../redux/actions';
// import { loginSelector, 
//   loginLoadingSelector, 
//   loginLoadedSelector, 
//   loginErrorSelector } from '../../redux/selectors'; 

function Popup({active = false, setPopupActiveState}) {
  const [activeFormState, setActiveFormState] = useState({loginForm: true, registrForm: false, successForm: false});
  return (    
<div>
{/* {console.log('activeFormState=', activeFormState)} */}
  <div id="popup" className={cn(styles['popup'], {[styles['popup_is-opened']]:active})}>
      <div className={styles['popup__content']}>
      <img onClick={()=> setPopupActiveState(false)} id="closebtn" src={imageSrc} alt="Закрыть попап" className={styles['popup__close']} />
        <div className={styles['popup__place-content']}>
        {activeFormState.loginForm && <LoginForm activeFormState={activeFormState} setActiveFormState={setActiveFormState} setPopupActiveState={setPopupActiveState}/>}
        {activeFormState.registrForm && <RegistrForm activeFormState={activeFormState} setActiveFormState={setActiveFormState} />}
        {activeFormState.successForm && <SuccessForm activeFormState={activeFormState} setActiveFormState={setActiveFormState} />}
        </div>
      </div>  
      <PopupBack active={active} setPopupActiveState={setPopupActiveState} /> 
    </div>
</div>
  );
}

// const mapStateToProps = (state, props) => ({
//   loginState: loginSelector(state),
//   loading: loginLoadingSelector(state),
//   loaded: loginLoadedSelector(state),
//   error: loginErrorSelector(state),
// });

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   login: (data) => dispatch(login(data)),
// });


export default Popup;
