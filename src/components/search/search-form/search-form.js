// import './header.css';
import React from 'react';
import styles from './search-form.module.css';
import cn from 'classnames';
// import Button from '../../ui/button';
import InputButton from '../../ui/input-button';
import { loadCards } from '../../../redux/actions';
import { connect } from 'react-redux';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.setSearchPhrase=this.props.setSearchPhrase;
    this.setSearchPhrase=this.setSearchPhrase.bind(this); 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadCards = this.props.loadCards;
    this.loadCards = this.loadCards.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('Отправленное имя: ' + this.state.value);
    this.setSearchPhrase(this.state.value);
    event.preventDefault();
    this.loadCards({searchPhrase:this.state.value})
  }

  render ()
   { 
    return (
    <form className={styles['search__form']} name="new" onSubmit={this.handleSubmit}>
    <input
      required
      minLength="2"
      type="text"
      name="searchText"
      className={styles['search__input']}
      placeholder="Введите тему новости"
      id="searchinput"
      value={this.state.value} onChange={this.handleChange}
    />
    <InputButton onClickFunction={this.handleSubmit} classNameProp={'search__button'} btnText={'Искать'}/>
  </form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadCards: (searchPhrase) => dispatch(loadCards(searchPhrase)),
});

export default connect(null, mapDispatchToProps)(SearchForm);
