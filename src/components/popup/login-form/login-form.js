import isEmail from 'validator/lib/isEmail';
import React from 'react';
import styles from './login-form.module.css';
import { NavLink, Link } from "react-router-dom";
import cn from 'classnames';
import { useEffect } from 'react';
import InputButton from '../input-button';
import FormErrors from '../form-errors';


class LoginForm extends React.Component { 
  constructor(props) {
    super(props);
    const {activeFormState, setActiveFormState} = this.props;
    this.activeFormState = activeFormState;
    this.setActiveFormState = setActiveFormState;
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
      () => { this.validateField(name, value) });
    // console.log('this.state.email=', this.state.email);
  }

  handleSubmit(event) {
    // alert('Отправленное имя: ' + this.state.value);
    // this.setSearchPhrase(this.state.value);
    event.preventDefault();
    // this.loadCards({searchPhrase:this.state.value})
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    this.validationHelpWords = {
      validationLenght: 'Должно быть от 2 до 30 символов',
      validationEmailPresent: 'Некорректный формат email',
    };

  switch(fieldName) {
      case 'email':
        if (value.length < 2 || value.length > 30) {
         fieldValidationErrors.email = this.validationHelpWords.validationLenght;
         break;
        }

        emailValid = isEmail(value);
        fieldValidationErrors.email = emailValid ? '' : this.validationHelpWords.validationEmailPresent;
        break;

      case 'password':
        if (value.length < 2 || value.length > 30) {
          fieldValidationErrors.password = this.validationHelpWords.validationLenght;
          break;
         }

        fieldValidationErrors.password = '';
        passwordValid = true;
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
  validateForm() {
    this.setState({formValid: this.state.emailValid &&
                              this.state.passwordValid});
  }


  render ()
   { 
  return (    
    <div>
    <h3 className={styles['popup__title']}>Вход</h3>
  <form id="formLogin" className={styles['form']} name="formLogin">
    <fieldset className={styles['form__fieldset']}>
      <label htmlFor="emailField" className={styles['form__label']}>Email</label>
      <input type="email" value={this.state.email} onChange={this.handleChange} name="email" id="email" className={styles['form__input']} placeholder="Введите почту"
        required autoComplete="on"/>
        <FormErrors formErrors={this.state.formErrors} fieldName={'email'} classNameForErrors={styles['form__err-message']}/>
      
    </fieldset>
    <fieldset className={cn(styles['form__fieldset'], styles['form__fieldset_small-margin'])}>
      <label htmlFor="passwordField" className={styles['form__label']}>Пароль</label>
      <input type="password" value={this.state.password} onChange={this.handleChange} name="password" id="password" className={styles['form__input']} placeholder="Введите пароль"
        required minLength="2" autoComplete="current-password"/>
        <FormErrors formErrors={this.state.formErrors} fieldName={'password'} classNameForErrors={styles['form__err-message']}/>
      
    </fieldset>

    <p className={styles['form__err-message']} id="formerrmessage"> </p>
    
    <InputButton disabled={!this.state.formValid} onClickFunction={this.handleSubmit} classNameProp={'form__button'} btnText={'Войти'}/>

  </form>
  <div className={styles['popup__reg-enter']}>
    <p className={cn(styles['text'], styles['popup__text'])}>или&nbsp;</p>
    <a href="#" onClick={() => this.setActiveFormState({...this.activeFormState, loginForm: false, registrForm: true})} className={cn(styles['link'], styles['popup__link'])} id="actionlink">Зарегистрироваться</a>
  </div>
  </div>
  );
   }
}

export default LoginForm;
