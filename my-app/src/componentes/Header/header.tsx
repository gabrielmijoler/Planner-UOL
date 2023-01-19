import React from 'react';
import { ControlHeader,  Titulo,  Weekeplanner } from '.';
import logouol from "../Image/logouol.svg"
import logout from "../Image/logout.svg"


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
        <ControlHeader>
            <Weekeplanner>
              <p>
                <Titulo>Weekly Planner</Titulo><br />
                Use this planner to organize your daily issues</p ></Weekeplanner>
            <section style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                <p style={{display:'flex', justifyContent:'center'}}>{horas}</p>
                <p style={{display:'flex', justifyContent:'center'}}>{new Date().toLocaleString("en-US", { month: "long" })}</p>
            </section>
            <section>asdadadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </section>
            <section>
                <img src={logouol} alt="Logouol" style={{width: '100px'}} />
                <input type="button" src={logout}/>
            </section>
        </ControlHeader>
        
    </>
    )
  }


export default Header;