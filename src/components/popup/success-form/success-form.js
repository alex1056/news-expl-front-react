// import './header.css';
import React from 'react';
import styles from './success-form.module.css';
import { NavLink, Link } from "react-router-dom";
// import imageSrc from '../../images/not-found-icon.svg'
import cn from 'classnames';
import { useEffect } from 'react';
// import sleepWrap from '../../hocs/sleep'
import InputButton from '../input-button'


class LoginForm extends React.Component { 
  constructor(props) {
    super(props);
    const {activeFormState, setActiveFormState} = this.props;
    this.activeFormState = activeFormState;
    this.setActiveFormState = setActiveFormState;
    // this.activeFormState = this.activeFormState.bind(this);
    // this.setActiveFormState = this.setActiveFormState.bind(this);
    // {console.log(this.activeFormState)};
    // {console.log(this.setActiveFormState)};
    this.state = {value: ''};
    // this.setSearchPhrase=this.props.setSearchPhrase;
    // this.setSearchPhrase=this.setSearchPhrase.bind(this); 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.loadCards = this.props.loadCards;
    // this.loadCards = this.loadCards.bind(this);
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('Отправленное имя: ' + this.state.value);
    // this.setSearchPhrase(this.state.value);
    event.preventDefault();
    // this.loadCards({searchPhrase:this.state.value})
  }

  render ()
   { 
  return (  
    
    <div>
      <h3 className={cn(styles['popup__title'], styles['popup__title_success'])}>Пользователь успешно зарегистрирован</h3>
    <div className={styles['popup__reg-enter']}>
      <a href="#" onClick={() => this.setActiveFormState({...this.activeFormState, loginForm: true, registrForm: false, successForm: false})} className={cn(styles['link'], styles['popup__link'], styles['popup__link_success'])} id="actionlink">Выполнить вход</a>
    </div>
    </div>
  );
   }
}

export default LoginForm;
