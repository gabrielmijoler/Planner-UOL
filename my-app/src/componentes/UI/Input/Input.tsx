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
    width?:number;
    height?: number;
    borderRadius?: number;
    background?: string;
    color?: string;
    bordercolor?: string;
    marginLeft?: number;
    icon?: any;
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
          sizeplaceholder={props.size || 12}
          className={props.className}
          onChange={handleChange}
          placeholder={props.placeholder}
          value={message}
          type={props.type}
          width={props.width || 347}
          height={props.height || 60} 
          borderRadius={props.borderRadius || 50}
          background={props.background || '#26292C'} 
          color={props.color} 
          bordercolor={props.bordercolor ||'#FFFFFF'}
          marginLeft={props.marginLeft}
        />
        <img src={props.icon} alt="" />
    </P>
    );
}