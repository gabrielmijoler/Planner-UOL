import React, { useState } from 'react';
import Input from '../UI/Input/Input';

const Cadastro: React.FC = (props:any) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassowwrd] = useState<string>('')
    
    return(
        <form className='form'>
        <p>
          <Input type="text" 
          label="first name" 
          value={username} 
          onChange={function (str: string): void {
            throw new Error('Function not implemented.');
          } } 
          placeholder='user name' />
        </p>

        <p>
          <label>
            last name
            <input type="text"  value={password} onChange={(e) => setPassowwrd(e.target.value)}/>
          </label>
        </p>
        </form>
    )

}
