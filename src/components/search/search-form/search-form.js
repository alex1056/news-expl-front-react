import React from 'react';
import styles from './search-form.module.css';
import cn from 'classnames';
import InputButton from '../../ui/input-button';
import { loadCards, loadUserCards } from '../../../redux/actions';
import { connect } from 'react-redux';
import {setUserData, getUserData } from '../../../utils/local-storage-handler';
import {UserContext} from '../../../user-context/user-context';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);    
    this.searchPhrase=this.props.searchPhrase;
    // this.state = {value: searchPhrase ? searchPhrase.searchPhrase : ''};
    this.state = {value: this.searchPhrase.searchPhrase};
    this.setSearchPhrase=this.props.setSearchPhrase;
    this.setSearchPhrase=this.setSearchPhrase.bind(this); 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadCards = this.props.loadCards;
    this.loadCards = this.loadCards.bind(this);
    this.loadUserCards = this.props.loadUserCards;
    this.loadUserCards = this.loadUserCards.bind(this);
  }
  static contextType = UserContext;

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setSearchPhrase(this.state.value);
    event.preventDefault();
    this.loadCards({searchPhrase:this.state.value});
    setUserData('searchPhrase', {searchPhrase: this.state.value});
    const {userContextState} = this.context;
    if(userContextState.isLoggedIn) {
      this.loadUserCards();
    }
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
  loadUserCards: () => dispatch(loadUserCards()),
});

export default connect(null, mapDispatchToProps)(SearchForm);
