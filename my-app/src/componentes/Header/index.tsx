import React, { useContext, useEffect, useState } from 'react';
import { ControlHeader, SectionLogOut, Titulo, Weekeplanner } from './style';
import logouolback from "../Image/logouolback.svg"
import iconlogout from "../Image/iconlogout.svg"
import { ApiContext } from '../../context/api-context';
import axios from 'axios';


const Header: React.FC = (props: any) => {
  const getItem = JSON.parse(localStorage.getItem('objt') as string)

  const [city, setCity] = useState<object | null>();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=a00b3f77a926ab75a8ed266af90ae3ed`;
  async function getCity() {
      const response = await axios.get(url).then((res)=>{
        setCity(res.data)
        console.log(response)
        console.log(res.data)
      });
    }
  

  // const handleCity= () => {
  //   setCity(getItem.city)
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=a00b3f77a926ab75a8ed266af90ae3ed`).then((response)=>{
  //     console.log('response',response)
  //   })
  //   console.log("city dentro da api",city)
  // }

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
    console.log("getitem",getItem.city)
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
        <section>{props.name}
        </section>
        <SectionLogOut>
          <a href="href='https://compass.uol/pt/sobre-nos/'"><img src={logouolback} alt="Logouol" style={{ marginBottom: '10%' }} /></a>
          <a onClick={handleLogout} href='/login'><img alt='logo compass' src={iconlogout}></img></a>
          Logout
        </SectionLogOut>
      </ControlHeader>

    </>
  )
}


export default Header;