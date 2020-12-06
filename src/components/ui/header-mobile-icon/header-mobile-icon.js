import styles from './header-mobile-icon.module.css';
import Sandwich from '../sandwich';
import Cross from '../cross';

function HeaderMobileIcon({type, mobileMenuActiveState, setStateMobileMenuActive, colorProp}) {
  
  const typeLocal = !mobileMenuActiveState ? 'sandwich' : 'cross';
  // console.log('HeaderMobileIcon, typeLocal=', typeLocal);

  return (
  <div onClick={()=>setStateMobileMenuActive(!mobileMenuActiveState)} className={styles['header-mobile-icon']}>
    {typeLocal === 'sandwich' ? <Sandwich colorProp={colorProp} /> : <Cross /> }  
  </div>
   
  );
}

export default HeaderMobileIcon;
