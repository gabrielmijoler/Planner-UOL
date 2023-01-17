import exp from 'constants';
import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import logoUol from '../Image/logouol.svg';
import { ControlForm, SectionInputs, SectionLogoUOL } from '../Cadastro';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';


const Login: React.FC = (props: any) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassowrd] = useState<string>('')

  return (
    <ControlForm>
      <SectionInputs>
        <form>
          <Input type="text"
            value={username}
            onChange={(e) => setUsername(e)}
            placeholder='user name'
          />

          <Input type="text"
            value={password}
            onChange={(e) => setPassowrd(e)}
            placeholder='password'
          />
        </form>
        <Button type='submit' label="Register Now"/>
        <section>
          <ul style={{color:"#fff"}}>
            You don´t have cadastre click<Link style={{color:"white"}} to='/cadastro'> here</Link>
          </ul>
        </section>
      </SectionInputs>
      <SectionLogoUOL className='container'>
        <a href='https://compass.uol/pt/sobre-nos/'><img style={{marginLeft:"25%", marginTop:"3%"}} src={logoUol}/></a>
      </SectionLogoUOL>
    </ControlForm>
  )
}

export default Login;