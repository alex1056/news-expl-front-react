import styles from './header-mobile-icon.module.css';
import Sandwich from '../sandwich';
import Cross from '../cross';

function HeaderMobileIcon({type}) {
  return (
  <div className={styles['header-mobile-icon']}>
    {type === 'sandwich' ? <Sandwich /> : <Cross /> }  
  </div>
   
  );
}

export default HeaderMobileIcon;
