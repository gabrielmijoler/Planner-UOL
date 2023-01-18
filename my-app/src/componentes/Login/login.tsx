import exp from 'constants';
import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import logoUol from '../Image/logouol.svg';
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

          <Input type="text"
            size={16}
            value={password}
            onChange={(e) => setPassowrd(e)}
            placeholder='password'
          />
        </form>
        <Button width={379} type='submit' label="Log in" />
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