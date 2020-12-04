// import './header.css';
// import styles from './not-found.module.css';
import { NavLink, Link } from "react-router-dom";
import imageSrc from '../../images/not-found-icon.svg'
import cn from 'classnames';
import { useEffect } from 'react';
import Header from '../header';
import About from '../about';
import SearchWrapper from '../search-wrapper';

// function IndexPageWrapper({setPopupActiveState}) {
  function IndexPageWrapper(props) {
  // console.log('IndexPageWrapper, props=', props);
    const {setPopupActiveState, activePageState, setActivePageState} = props;
  
    useEffect(() => { 
      // loadUserCards();
      // if(activePageState !== 'indexPage') {
      //   setActivePageState('indexPage');
      //   // window.location.reload();
      //   console.log('IndexPageWrapper, setActivePageState вызвали');
      // }  
    });

    return (    
      <div>
      <Header setPopupActiveState={setPopupActiveState} colorProp={'white'} />
      <SearchWrapper activePageState={activePageState} setActivePageState={setActivePageState} />
      <About /> 
      </div>
    );
  }

export default IndexPageWrapper;
