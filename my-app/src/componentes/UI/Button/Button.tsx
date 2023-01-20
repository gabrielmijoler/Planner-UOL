import React from 'react';
import { ButtonStyled } from '.';

type Props = {
  label?: string;
  onClick?: () => void
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined, 
  children?: string;
  width?: number;
  height?: number;
  fontSize?:number;
  style?:any;
  boderRadius?: number;
  borderColors?: string;
  marginleft?: number;
  background?: string;
};

const Button = (props:Props) => {  
  return (
    <>
    <ButtonStyled
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      widthsize={props.width}
      height={props.height}
      fontSize={props.fontSize}
      style={props.style}
      borderRadius={props.boderRadius || 50}
      borderColors={props.borderColors}
      marginleft={props.marginleft}
      background={props.background}
    >
      {props.children}  
      {props.label}
    </ButtonStyled>
    </>
  );
};

export default Button;