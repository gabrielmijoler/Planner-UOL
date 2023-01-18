import React, { useState } from 'react';
import { InputStyle, LabelInput, P } from '.';


type Props = {
    label?: string;
    onChange?: (str: string) => void;
    placeholder: string;
    value?: string;
    type?: 'text' | 'number' | 'password' | 'email';
    className?: string;
    size?: number;
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
        />
    </P>
    );
}