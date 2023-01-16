import React, { useState } from 'react';
import Input from '../UI/Input/Input';

const Cadastro: React.FC = (props:any) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassowwrd] = useState<string>('')
    
    return(
        <form className='form'>
        <p>
          <Input type="text" label="first name" valor={username  } value={username} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)} />
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
