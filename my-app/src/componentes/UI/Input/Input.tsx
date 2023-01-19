import React, { useState } from 'react';
import { InputStyle, LabelInput, P } from '.';


type Props = {
    label?: string;
    onChange?: (str: string) => void;
    placeholder: string;
    value?: string;
    type: 'text' | 'number' | 'password' | 'email'|'time';
    className?: string;
    size?: number;
    width?:number,
    height?: number,
    borderRadius?: number,
    background?: string,
    color?: string,
    bordercolor?: string,
  };
  

  export default function Input(props: Props) {
    const [message, setMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
        console.log(event.target.value);
      };

    return (
    <P>
        <LabelInput>{props.label}</LabelInput>
        <InputStyle
          sizeplaceholder={props.size}
          className={props.className}
          onChange={handleChange}
          placeholder={props.placeholder}
          value={message}
          type={props.type}
          width={props.width}
          height={props.height} 
          borderRadius={props.borderRadius}
          background={props.background} 
          color={props.color} 
          bordercolor={props.bordercolor}
        />
    </P>
    );
}