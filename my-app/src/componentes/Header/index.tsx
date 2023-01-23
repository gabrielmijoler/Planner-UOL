import React from 'react';
import { ControlHeader, SectionLogOut, Titulo, Weekeplanner } from './style';
import logouolback from "../Image/logouolback.svg"
import iconlogout from "../Image/iconlogout.svg"
import { useNavigate } from 'react-router-dom';


const Header: React.FC = (props: any) => {



  var dataAtual = new Date();
  let date = dataAtual.getDate();
  let year = dataAtual.getFullYear();
  let horas = dataAtual.toTimeString()
  let monthString = dataAtual.toDateString().slice(3, -7)

  return (
    <>
      <ControlHeader>
        <Weekeplanner>
          <p>
            <Titulo>Weekly Planner</Titulo><br />
            Use this planner to organize your daily issues</p ></Weekeplanner>
        <section style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '25px' }}>
          <p style={{ display: 'flex', justifyContent: 'center', fontSize: '40px', marginBottom: '0px' }}>{horas.slice(0, -38)}</p>
          <p style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', marginTop: '0px' }}>{`${monthString} ${date}th,${year} `}</p>
        </section>
        <section>clima
        </section>
        <SectionLogOut>
          <img src={logouolback} alt="Logouol" style={{ marginBottom: '10%' }} />
          <a onClick={()=>{
            localStorage.removeItem('objt')
            localStorage.removeItem('Fullname')
          }} href='/login'><img alt='logo compass' src={iconlogout} ></img></a>
          Logout
        </SectionLogOut>
      </ControlHeader>

    </>
  )
}


export default Header;