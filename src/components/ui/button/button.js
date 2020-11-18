// import './header.css';
import styles from './button.module.css';
import cn from 'classnames';

function Button({classNameProp}) {
  return (
        <button type="submit" className={cn(styles['button'], styles[classNameProp])}>
          Искать
        </button>
  );
}

export default Button;
