import styles from './sandwich.module.css';
import cn from 'classnames';

function Sandwich({colorProp}) {
  return (
  <div className={cn(styles['sandwich'], {[styles['sandwich_black']]: colorProp === 'dark'})}>

  </div>
   
  );
}

export default Sandwich;
