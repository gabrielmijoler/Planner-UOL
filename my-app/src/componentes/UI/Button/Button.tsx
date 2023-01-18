import React from 'react';
import { ButtonStyled } from '.';

type Props = {
  label?: string;
  onClick?: () => void
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined, 
  children?: string;
  width?: number;
};

const Button = (props:Props) => {

  
  return (
    <>
    <ButtonStyled
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      widthsize={props.width}
    >
      {props.children}  
      {props.label}
    </ButtonStyled>
    </>
  );
};

export default Button;