import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import logoUol from '../Image/logouol.svg';
import iconPassowrd from '../Image/iconPassowrd.svg';
import iconUser from '../Image/iconUser.svg';
import { ControlForm, ImageLaptop, SectionImg, SectionInputs, SubTitulo, TituloWelcome } from '../Cadastro';
import Button from '../UI/Button/Button';
import { Link, useHref } from 'react-router-dom';
import { ControlInput, Imagem,  P } from '.';


const Login: React.FC = (props: any) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassowrd] = useState<string>('')
  const [emptyusername, setEmptyusername] = useState<any>(null)
  const [emptypassword, setEmptypassword] = useState<any>(null)


  function PasswordHandleChange(){
    if(password !== ''){
      setEmptyusername(true)
    }else{
      setEmptyusername(false)
    }
  }
  
  function UsarnameHandleChange(){
    if(username !== ''){
      setEmptypassword(true)
    }else{
      setEmptypassword(false)
    }
  }

  return (
    <ControlForm>
      <SectionInputs>
        <TituloWelcome>Welcome,
          <SubTitulo>To continue browsing safely, log in to the network.</SubTitulo></TituloWelcome>
        <form>
          <P>Login</P>
          <ControlInput empty={emptyusername} style={{marginBottom: '20px'}}>
            <Input
              size={16}
              type="text"
              value={username}
              onChange={PasswordHandleChange}
              placeholder='user name'
            />
            <Imagem src={iconUser} alt="" />
          </ControlInput>
          <ControlInput empty={emptypassword}>
            <Input 
              type="password"
              value={password}
              size={16}
              onChange={UsarnameHandleChange}
              placeholder='password'
            />
            <Imagem src={iconPassowrd}/>
          </ControlInput>
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