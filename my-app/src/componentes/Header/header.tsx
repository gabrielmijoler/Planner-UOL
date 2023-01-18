import React from 'react';
import logouol from "../Image/logouol.svg"


const Header: React.FC = (props:any) => {



var dataAtual = new Date();
console.log(dataAtual);

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let data = dataAtual.toDateString()
let horas = dataAtual.toTimeString()

// let horas = newDate.setHours(hours: nuber);

// return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  return (
    <>
        <section >
            <section></section>
            <section style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                <p style={{display:'flex', justifyContent:'center'}}>{horas}</p>
                <p style={{display:'flex', justifyContent:'center'}}>{new Date().toLocaleString("en-US", { month: "long" })}</p>
            </section>
            <section></section>
            <section>
                <img src="" alt="" />
                <input type="button" src={logouol} />
            </section>
        </section>
        
    </>
    )
  }


export default Header;