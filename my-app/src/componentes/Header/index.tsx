import React, { useContext, useEffect, useState } from 'react';
import { ControlHeader, DivTempo, Pcity, Pgrau, SectionLogOut, Titulo, Weekeplanner } from './style';
import logouolback from "../../Image/logouolback.svg"
import iconLogout from "../../Image/iconlogout.svg"
import iconNuvem from "../../Image/nuvemtempo.svg"
import { ApiContext } from '../../context/api-context';
import axios from 'axios';


  const Header: React.FC = (props: any) => {
  const getItem = JSON.parse(localStorage.getItem('logUser') as string)
  

  const [city, setCity] = useState(getItem.city);
  const [data, setData] = useState<any>(getItem.city);


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=a00b3f77a926ab75a8ed266af90ae3ed`;

  async function getCity() {
      await axios.get(url).then((res)=>{
        setData(res.data)
      })
    }
  

  const { Logout } = useContext(ApiContext)

  var dataAtual = new Date();
  let date = dataAtual.getDate();
  let year = dataAtual.getFullYear();
  let horas = dataAtual.toTimeString()
  let monthString = dataAtual.toLocaleString('en-Us', { month: 'long' })

  function handleLogout(){
    Logout()
  }

  useEffect(() => {
    getCity()
  }, [])

  return (
    <>
      <ControlHeader>
        <Weekeplanner>
          <p>
            <Titulo>Weekly Planner</Titulo><br />
            Use this planner to organize your daily issues</p ></Weekeplanner>
        <section style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '25px' }}>
          <p style={{ display: 'flex', justifyContent: 'center', fontSize: '40px', marginBottom: '0px' }}>{horas.slice(0, -38)}</p>
          <p style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', marginTop: '0px' }}>{`${monthString} ${date},${year} `}</p>
        </section>
        <DivTempo>
          <Pcity>{data.name} - {getItem.country}</Pcity>
          <Pgrau>
            <img src={iconNuvem} alt="Tempo" />
            {Number(data.main?.temp).toFixed()}°
            </Pgrau>
        </DivTempo>
        <SectionLogOut>
          <a href="href='https://compass.uol/pt/sobre-nos/'"><img src={logouolback} alt="Logouol" style={{ marginBottom: '10%' }} /></a>
          <a onClick={handleLogout} href='/login'><img alt='logo compass' src={iconLogout}></img></a>
          Logout
        </SectionLogOut>
      </ControlHeader>

    </>
  )
}


export default Header;