import React, { useEffect, useState } from 'react';
import { ConteinerInput, InputStyle, LabelInput } from './style';


type Props = {
  id?: string;
  label?: string;
  onChange: (str: string) => void;
  onBlur?: (str: string) => void;
  placeholder: string;
  value?: string;
  type: 'text' | 'number' | 'password' | 'email' | 'time' | 'date';
  className?: string;
  size?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
  background?: string;
  color?: string;
  bordercolor?: string;
  marginLeft?: number;
  icon?: any;
  showlabel?: boolean
  error?: boolean
};


export default function Input({
  onChange,
  onBlur,
  label,
  value = "",
  size,
  placeholder,
  type,
  className,
  width,
  height,
  borderRadius,
  background,
  color,
  bordercolor,
  marginLeft,
  showlabel = true,
  id,
  error,
}: Props) {

  return (  
    <ConteinerInput>
      {showlabel && (<LabelInput>{label}</LabelInput>)}
      <InputStyle
        id={id}
        onChange={event => onChange(event.target.value)}
        sizeplaceholder={size || 12}
        className={className}
        placeholder={placeholder}
        value={value}
        type={type}
        width={width || 347}
        height={height || 60}
        borderRadius={borderRadius || 50}
        background={background || '#26292C'}
        color={color || '#ffffff'}
        bordercolor={bordercolor}
        marginLeft={marginLeft}
        onBlur={event => onBlur && onBlur(event.target.value)}
        error={error}
      />
    </ConteinerInput>
  );
}