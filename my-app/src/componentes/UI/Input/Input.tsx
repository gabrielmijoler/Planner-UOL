import React, { useState } from 'react';

import './Input.css';

// interface CamptextProps{
//     label?: string;
//     placeholder?: string;
//     defaultValue?: string;
//     startIcon?: string;
//     onChange?(value: string): void;
//     onBlur?: (value: string) => void;
//     disabled?: boolean;
//     type?: 'text' | 'number' | 'password';
// }

// // const Input = React.forwardRef((props, ref) => {
// //   const inputRef = useRef();

// //   const activate = () => {
// //     inputRef.current.focus();
// //   };

// //   useImperativeHandle(ref, () => {
// //     return {
// //       focus: activate,
// //     };
// //   });



// export default function Input(props: CamptextProps){
//     return(
//         <section className="">
//             <label>{props.label}</label>
//             <input 
//             className="input"
//             type={props.type ?? "text"}
//             placeholder={props.defaultValue}
//             />
//         </section>
//     )
// }

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
    <a className="control">
        <label>{props.label}
        <input
        onChange={handleChange}
        placeholder={props.placeholder}
        value={message}
        type={props.type}
        />
        </label>
    </a>
        
    );
}