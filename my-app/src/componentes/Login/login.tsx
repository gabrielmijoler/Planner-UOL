import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import logoUol from '../Image/logouol.svg';
import iconPassowrd from '../Image/iconPassowrd.svg';
import iconUser from '../Image/iconUser.svg';
import { ControlForm, ImageLaptop, SectionImg, SectionInputs, SubTitulo, TituloWelcome } from '../Cadastro';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import { P } from '.';


const Login: React.FC = (props: any) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassowrd] = useState<string>('')

  return (
    <ControlForm>
      <SectionInputs>
        <TituloWelcome>Welcome,
          <SubTitulo>To continue browsing safely, log in to the network.</SubTitulo></TituloWelcome>
        <form>
          <P>Login</P>
          <Input
            size={16}
            type="text"
            value={username}
            onChange={(e) => setUsername(e)}
            placeholder='user name'
          />
          <img src={iconUser} alt="" />
          <Input type="text"
            size={16}
            value={password}
            onChange={(e) => setPassowrd(e)}
            placeholder='password'
          />
          <img src={iconPassowrd} alt="" />
        </form>
        <Button 
          type='submit' 
          label="Log in" width={379}
          background='linear-gradient(90deg, #FF2D04 0%, #C13216 100%)'
          height={67}
          fontSize={32}
          />
        <SectionImg>
          <ul style={{ color: "#fff" }}>
            You don't have cadastre click<Link style={{ color: "white" }} to='/cadastro'> here</Link>
          </ul>
        </SectionImg>
      </SectionInputs>
      <ImageLaptop className='container'>
        <a href='https://compass.uol/pt/sobre-nos/'><img style={{ marginLeft: "25%", marginTop: "3%" }} src={logoUol} /></a>
      </ImageLaptop>
    </ControlForm>
  )
}

export default Login;