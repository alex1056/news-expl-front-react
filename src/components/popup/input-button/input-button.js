// import './header.css';
import styles from './input-button.module.css';
import cn from 'classnames';

function InputButton({classNameProp, onClickFunction='Null', btnText='No text', disabled}) {
  return (
        <input disabled={disabled} type="submit" value={btnText} onClick={(event)=> onClickFunction(event)} className={cn(styles['button'], styles[classNameProp], {[styles['button_disabled']]: disabled})} />
        
  );
}

export default InputButton;
