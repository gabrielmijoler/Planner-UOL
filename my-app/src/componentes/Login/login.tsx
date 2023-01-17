import React, { useState } from 'react';
import Input from '../UI/Input/Input';

const Cadastro: React.FC = (props: any) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassowrd] = useState<string>('')

  return (
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
  )

}
