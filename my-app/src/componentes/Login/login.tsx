import exp from 'constants';
import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import logoUol from '../Image/logouol.svg';


const Login: React.FC = (props: any) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassowrd] = useState<string>('')

  return (
    <section>
      <section>
        <form className='form'>
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
      </section>
      <section className='container'>
        <a href='https://compass.uol/pt/sobre-nos/'><img style={{marginLeft:"25%", marginTop:"3%"}} src={logoUol}/></a>
      </section>
    </section>
  )
}

export default Login;