import cn from 'classnames';
import { useEffect } from 'react';
// import sleepWrap from '../../hocs/sleep'

function FormErrors({formErrors, fieldName, classNameForErrors}) {
  // console.log(sleepWrap);
  return (     
    <span className={classNameForErrors}>
      {formErrors[fieldName]}
    </span>
  );
}

export default FormErrors;
