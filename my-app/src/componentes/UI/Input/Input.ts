// import React, { useRef, useImperativeHandle } from 'react';

// import './Input.css';

// interface CamptextProps{
//     label: string,
//     valor: any,
//     tipo?: 'text' | 'email' | 'password',
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
//         <section className="flex flex-col mt-4">
//             <label>{props.label}</label>
//             <input type={props.tipo ?? "text"} className="rounded-lg bg-gray-200 border focus:bg-white focus:outline-none focus:border-blue-500 px-5 py-1 "></input>
//         </section>
//     )
// }