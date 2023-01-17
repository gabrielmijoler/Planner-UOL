import React, { useState } from 'react';

import './Input.css';
 

type Props = {
    label?: string;
    onChange?: (str: string) => void;
    placeholder: string;
    value?: string;
    type?: 'text' | 'number' | 'password' | 'email';
  };
  

  export default function Input(props: Props) {
    const [message, setMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
        console.log(event.target.value);
      };

    return (
    <p className="control">
        <label>{props.label}</label>
        <input
        onChange={handleChange}
        placeholder={props.placeholder}
        value={message}
        type={props.type}
        />
    </p>
    );
}