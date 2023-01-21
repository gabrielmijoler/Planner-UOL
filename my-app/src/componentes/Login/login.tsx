import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import logoUol from '../Image/logouol.svg';
import iconPassowrd from '../Image/iconPassowrd.svg';
import iconUser from '../Image/iconUser.svg';
import { ControlForm, ImageLaptop, SectionImg, SectionInputs, SubTitulo, TituloWelcome } from '../Cadastro/style';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import { ControlInput, Imagem,  P } from './style';


const Login: React.FC = (props: any) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassowrd] = useState<string>('')

  
  function UsarnameHandleChange(e: any){
    setUsername(e)
  }
  
  function PasswordHandleChange(e: any){
    setPassowrd(e)
  }

  return (
    <ControlForm>
      <SectionInputs>
        <TituloWelcome>Welcome,
          <SubTitulo>To continue browsing safely, log in to the network.</SubTitulo></TituloWelcome>
        <form>
          <P>Login</P>
          <ControlInput style={{marginBottom: '20px'}}>
            <Input
              showlabel={false}
              size={16}
              type="text"
              value={username}
              onChange={UsarnameHandleChange}
              onBlur={UsarnameHandleChange}
              placeholder='user name'
            />
            <Imagem empty={username?.length > 0} src={iconUser} alt="" />
          </ControlInput>
          <ControlInput>
            <Input 
              showlabel={false}
              type="password"
              value={password}
              size={16}
              onChange={PasswordHandleChange}
              onBlur={PasswordHandleChange}
              placeholder='password'
            />
            <Imagem empty={password?.length > 0} src={iconPassowrd} alt=""/>
          </ControlInput>
          <div>
          <Button 
            type='submit' 
            label="Log in" width={379}
            background='linear-gradient(90deg, #FF2D04 0%, #C13216 100%)'
            height={67}
            fontSize={32}
            />
          <SectionImg>
            <span style={{ color: "#fff" }}>
              You don't have cadastre click<Link style={{ color: "white" }} to='/cadastro'> here</Link>
            </span>
          </SectionImg>
        </div>
        </form>
      </SectionInputs>
      <ImageLaptop className='container'>
        <a href='https://compass.uol/pt/sobre-nos/'><img style={{ marginLeft: "25%", marginTop: "3%" }} src={logoUol} /></a>
      </ImageLaptop>
    </ControlForm>
  )
}

export default Login;