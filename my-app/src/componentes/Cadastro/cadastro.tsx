import React, { useEffect, useState } from 'react';
import "./cadastro.css"
import imglap from '../Image/IMGlap.png'

export interface ICadatro{
  firtname: string,
  lastname: string,
  birthdate: string,
  country: string,
  city: string,
  email: string,
  password: string,
}


const Cadastro: React.FC = (props:any) => {
  const [firtname, setFirstaname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [birthdate, setBirthdate] = useState<string>('')
  const [country, setCoutry] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassowwrd] = useState<string>('')


  useEffect(() => {
    const data: ICadatro = {
        firtname,
        lastname,
        birthdate,
        country,
        city,
        email,
        password,
    }
}, [])


  return (
    <section>
      <img src={imglap}></img>
      <form className='form'>
        <p>
          <label>
            first name
          <input type="text" value={firtname} onChange={(e) => setFirstaname(e.target.value)} />
            </label>
        </p>

        <p>
          <label>
            last name
            <input type="text"  value={lastname} onChange={(e) => setLastname(e.target.value)}/>
          </label>
        </p>

        <p>
          <label>
            birth date
            <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
          </label>
        </p>

        <p>
          <label>
            country
            <input type="text" value={country} onChange={(e) => setCoutry(e.target.value)} />
          </label>
        </p>

        <p>
          <label>
            city
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          </label>
        </p>

        <p>
          <label>
            email
            <input type="password" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </p>

        <p>
          <label>
            password
            <input type="password" value={password} onChange={(e) => setPassowwrd(e.target.value)} />
          </label>
        </p>

        <p>
          <input type="submit" />
        </p>
        </form>
      </section>
    )
  }


export default Cadastro;