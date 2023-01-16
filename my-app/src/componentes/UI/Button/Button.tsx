import React from 'react';

import './Button.css';

const Button = (props:any) => {
  return (
    <>
    <button
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}  
    </button>
    </>
  );
};

export default Button;