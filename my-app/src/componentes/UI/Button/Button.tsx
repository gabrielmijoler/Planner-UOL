import React from 'react';
import './Button.css';

type Props = {
  label?: string;
  onClick?: () => void
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined, 
  children?: string
};

const Button = (props:Props) => {

  
  return (
    <>
    <button
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}  
      {props.label}
    </button>
    </>
  );
};

export default Button;