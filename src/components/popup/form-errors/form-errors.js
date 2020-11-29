import cn from 'classnames';
import { useEffect } from 'react';
// import sleepWrap from '../../hocs/sleep'

function FormErrors({formErrors, fieldName, classNameForErrors}) {
  // console.log('formErrors=',formErrors);
  // console.log('fieldName=',fieldName);
  return (     
    <p className={classNameForErrors}>
      {formErrors[fieldName]}
    </p>
  );
}

export default FormErrors;
