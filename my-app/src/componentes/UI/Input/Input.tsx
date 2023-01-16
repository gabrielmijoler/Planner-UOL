import React, { useRef, useImperativeHandle } from 'react';

import './Input.css';

interface CamptextProps{
    label: string,
    valor: any,
    type?: 'text' | 'password',
    value:any,
    onChange:any
}

// const Input = React.forwardRef((props, ref) => {
//   const inputRef = useRef();

//   const activate = () => {
//     inputRef.current.focus();
//   };

//   useImperativeHandle(ref, () => {
//     return {
//       focus: activate,
//     };
//   });


export default function Input(props: CamptextProps){
    return(
        <section className="">
            <label>{props.label}</label>
            <input type={props.type ?? "text"} className="input" value={props.valor} onChange={props.valor} />
        </section>
    )
}