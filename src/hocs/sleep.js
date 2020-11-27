import React from 'react';
// import useAmount from '../hooks/use-amount';
import sleep from '../utils/sleep';
// import { useState } from 'react';

export default (WrappedComponent) => ({ active, ...props }) => {
  // export default (WrappedComponent) => (props) => {
  // const [activeNotFound, setActiveNotFound] = useState(active);
  // const amountProps = useAmount(initialCount);
  const timer = setTimeout(() => {
    // setCount('Timeout called!');
    console.log('Таймаут прошел 1000');
    return <WrappedComponent {...props} {...active} />;
  }, 1000);
  return <WrappedComponent {...props} {...active} />;
  // return <WrappedComponent {...props} />;
  // return <WrappedComponent {...props} {...amountProps} />;
  // sleep(1000)
  // .then(() => {
  //   // setActiveNotFound(!activeNotFound);
  //   active = !active;
  //   return <WrappedComponent {...props} {...active} />;
  // });

};
