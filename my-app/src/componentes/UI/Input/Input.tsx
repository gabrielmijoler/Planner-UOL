import React, { useState } from 'react';
import { InputStyle, LabelInput, P } from '.';


type Props = {
    label?: string;
    onChange: (str: string) => void;
    placeholder: string;
    value?: string;
    type: 'text' | 'number' | 'password' | 'email'|'time';
    className?: string;
    size?: number;
    width?:number;
    height?: number;
    borderRadius?: number;
    background?: string;
    color?: string;
    bordercolor?: string;
    marginLeft?: number;
    icon?: any;
  };
  

  export default function Input({ 
    onChange, 
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
    }: Props) {

    return (
      <>
        <LabelInput>{label}</LabelInput>
        <InputStyle
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
          bordercolor={bordercolor ||'#FFFFFF'}
          marginLeft={marginLeft}
        />
      </>
    );
}