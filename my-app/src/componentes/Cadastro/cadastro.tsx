import React, { useEffect, useState } from 'react';
import Input from '../UI/Input/Input';
import logoUol from '../Image/logouol.svg';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import { ControlForm, ImageLaptop, SectionImg, SectionInputs,  SubTitulo, TituloWelcome } from '.';

export interface ICadatro{
  firtname: string,
  lastname: string,
  birthdate: string,
  country: string,
  city: string,
  email: string,
  password: string,
}


const Cadastro: React.FC = (props:any) => {
  const [firtname, setFirstaname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [birthdate, setBirthdate] = useState<string>('')
  const [country, setCoutry] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassowrd] = useState<string>('')


  useEffect(() => {
    const data: ICadatro = {
        firtname,
        lastname,
        birthdate,
        country,
        city,
        email,
        password,
    }
}, [])


  return (
    <>
    <ControlForm>
      <SectionInputs>
        <TituloWelcome className='titleWelcome'>Welcome,
        <SubTitulo className='second-title'>Please, register to continue.</SubTitulo></TituloWelcome>
          <form>
              <Input 
                label="first name"
                type="text"
                value={firtname}
                onChange={(e) => setFirstaname(e)}
                placeholder='Your first name'
              />
              <Input 
                label="last name"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e)}
                placeholder='Your last name'
              />
              <Input 
                label="birth date"
                type="number"
                value={birthdate}
                onChange={(e) => setBirthdate(e)}
                placeholder='MM/DD/YYYY'
              />
              <Input 
                label="Country"
                type="text"
                value={country}
                onChange={(e) => setCoutry(e)}
                placeholder='Your Country'
              />
              <Input 
                label="City"
                type="text"
                value={city}
                onChange={(e) => setCity(e)}
                placeholder='Your City'
              />
              <Input 
                label="e-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e)}
                placeholder='A valid e-mail here'
              /> 
              <Input 
                label="password"
                type="password"
                value={password}
                onChange={(e) => setPassowrd(e)}
                placeholder='Your password'
              /> 
              <Input 
                label="password"
                type="password"
                value={password}
                onChange={(e) => setPassowrd(e)}
                placeholder='Comfirm your password'
              /> 
              <Button type='submit' label="Register Now"/>
              <SectionImg>
                <ul style={{color:"#fff"}}>
                  You have cadastre click<Link style={{color:"white"}} to='/login'> here</Link>
                </ul>
              </SectionImg>
          </form>
        </SectionInputs>
        <ImageLaptop>
          <a href='https://compass.uol/pt/sobre-nos/'><img style={{marginLeft:"25%", marginTop:"3%"}} src={logoUol}/></a>
        </ImageLaptop>
      </ControlForm>
      </>
    )
  }


export default Cadastro;