import React, { useContext, useState } from 'react';
import Input from '../UI/Input';
import logoUol from '../Image/logouol.svg';
import iconPassowrd from '../Image/iconPassowrd.svg';
import iconUser from '../Image/iconUser.svg';
import { ControlForm, ImageLaptop, SectionImg, SectionInputs, Spanhere, SubTitulo, TituloWelcome } from '../Cadastro/style';
import Button from '../UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ControlInput, Imagem, P, SectionButton, Spanlogin } from './style';




const Login: React.FC = () => {
  let navigate = useNavigate();

  const [loginItem, setLoginItem] = useState({
    username: '',
    password: '',
  })
  const [erroLoigin, setErroLoigin] = useState<boolean>(false)


  const getitem = JSON.parse(localStorage.getItem('objt') as string)
  const getFullName = JSON.parse(localStorage.getItem('Fullname') as string)

  const validationLogin: any = (e: any) => {

    if ((getitem.email === loginItem.username || getFullName === loginItem.username) &&
      (getitem.password === loginItem.password)) {
      navigate('/dashboard')
    } else {
      setErroLoigin(true)
      e.preventDefault()
    }

  }

  return (
    <ControlForm>
      <SectionInputs>
        <TituloWelcome style={{marginTop: '55%'}}>Welcome,
          <SubTitulo>To continue browsing safely, log in to the network.</SubTitulo></TituloWelcome>
        <form onSubmit={validationLogin}>
          <P>Login</P>
          <ControlInput style={{ marginBottom: '20px' }}>
            <Input
              showlabel={false}
              size={16}
              type="text"
              value={loginItem.username}
              onChange={(e) => setLoginItem({ ...loginItem, username: e })}
              placeholder='user name'
            />
            <Imagem empty={loginItem.username?.length > 0} src={iconUser} alt="" />
          </ControlInput>
          <ControlInput>
            <Input
              showlabel={false}
              type="password"
              value={loginItem.password}
              size={16}
              onChange={(e) => setLoginItem({ ...loginItem, password: e })}
              placeholder='password'
            />
            <Imagem empty={loginItem.password?.length > 0} src={iconPassowrd} alt="" />
          </ControlInput>

          <SectionButton>
            {erroLoigin && <Spanlogin>Wow, invalid username or password.<br />
              Please, try again!</Spanlogin>}
            <Button
              type='submit'
              label="Log in" width={379}
              background='linear-gradient(90deg, #FF2D04 0%, #C13216 100%)'
              height={67}
              fontSize={32}
              margintop={15}
            />
            <SectionImg>
              <Spanhere marginleft={15}>
                You don't have cadastre click<Link style={{ color: "white" }} to='/cadastro'> here</Link>
              </Spanhere>
            </SectionImg>
          </SectionButton>
        </form>
      </SectionInputs>
      <ImageLaptop className='container'>
        <a href='https://compass.uol/pt/sobre-nos/'><img style={{ marginLeft: "25%", marginTop: "3%" }} src={logoUol} /></a>
      </ImageLaptop>
    </ControlForm>
  )
}

export default Login;