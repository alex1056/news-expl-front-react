
import React from 'react';
import isEmail from 'validator/lib/isEmail';
import styles from './registr-form.module.css';
import { NavLink, Link } from "react-router-dom";
// import imageSrc from '../../images/not-found-icon.svg'
import cn from 'classnames';
import { useEffect } from 'react';
import InputButton from '../input-button';
import FormErrors from '../form-errors';

import MainApi from '../../../api/main-api';
import { URL_MAIN_API } from '../../../config';
import sleep from '../../../utils/sleep';


class RegistrForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {value: ''};
    const {activeFormState, setActiveFormState} = this.props;
    this.activeFormState = activeFormState;
    this.setActiveFormState = setActiveFormState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
      name: '',
      formErrors: {email: '', password: '', name: '', submit: ''},
      emailValid: false,
      passwordValid: false,
      nameVilid: false,
      formValid: false
    }
    this.mainApi = new MainApi(URL_MAIN_API);
  }

  componentDidUpdate(prevProps) {
    const {formErrors} = this.state;      
     if (!prevProps.error && this.props.error ) {     
         this.setState({formErrors: {email: formErrors.email, password: formErrors.password, submit: this.props.error.name}});
         }
   }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
      () => { this.validateField(name, value) });
    this.setState({formErrors: {submit: ''}});
  }

  handleSubmit(event) {
    event.preventDefault();
    const credentials = {email: this.state.email, password: this.state.password, name: this.state.name};
    this.mainApi.signup(credentials)
    .then((result) => {
      sleep(1500)
      .then(()=> 
      this.setActiveFormState({...this.activeFormState, loginForm: false, registrForm: false, successForm: true}))
      return result;
    })
    .catch((err) => {
      this.setState({formErrors: {submit: err.message}});
    });
    
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let nameValid = this.state.nameValid;
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

      case 'name':
        if (value.length < 2 || value.length > 30) {
         fieldValidationErrors.name = this.validationHelpWords.validationLenght;
         break;
        }

        nameValid = true;
        fieldValidationErrors.name = '';
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
                    passwordValid: passwordValid,
                    nameValid: nameValid
                  }, this.validateForm);
  }
  validateForm() {
    this.setState({formValid: this.state.emailValid &&
                              this.state.passwordValid && this.state.nameValid});
  }

  render ()
   { 
  return (    
    <div>
      <h3 className={styles['popup__title']}>Регистрация</h3>
    <form id="formRegister" className={styles['form']} name="formRegister">
    <fieldset className={styles['form__fieldset']}>
        <label htmlFor="emailField" className={styles['form__label']}>Email</label>
        <input type="email" value={this.state.email} onChange={this.handleChange} name="email" id="email" className={styles['form__input']} placeholder="Введите почту"
          required />
           <FormErrors formErrors={this.state.formErrors} fieldName={'email'} classNameForErrors={styles['form__err-message']}/>
        
      </fieldset>
      <fieldset className={styles['form__fieldset']}>
        <label htmlFor="passwordField" className={styles['form__label']}>Пароль</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="password" className={styles['form__input']} placeholder="Введите пароль"
          required autoComplete="off"/>
           <FormErrors formErrors={this.state.formErrors} fieldName={'password'} classNameForErrors={styles['form__err-message']}/>
        
      </fieldset>

      <fieldset className={cn(styles['form__fieldset'], styles['form__fieldset_small-margin'])}>
        <label htmlFor="nameField" className={styles['form__label']}>Имя</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} id="name" className={styles['form__input']} placeholder="Введите своё имя"
          required minLength="2" autoComplete="off"/>
        
        <FormErrors formErrors={this.state.formErrors} fieldName={'name'} classNameForErrors={styles['form__err-message']}/>
      </fieldset>
      <FormErrors formErrors={this.state.formErrors} fieldName={'submit'} classNameForErrors={styles['form__err-message']}/>
      <InputButton disabled={!this.state.formValid} onClickFunction={this.handleSubmit} classNameProp={'form__button'} btnText={'Зарегистрироваться'}/>
    </form>
    <div className={styles['popup__reg-enter']}>
      <p className={cn(styles['text'], styles['popup__text'])}>или&nbsp;</p>
      <a href="#" onClick={() => this.setActiveFormState({...this.activeFormState, loginForm: true, registrForm: false})} className={cn(styles['link'], styles['popup__link'])} id="actionlink">Войти</a>
    </div>
    </div>
  );
   }
}

export default RegistrForm;
