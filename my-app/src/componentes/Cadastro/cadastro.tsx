import React, { useEffect, useState } from 'react';
import Input from '../UI/Input/Input';
import logoUol from '../Image/logouol.svg';
import Button from '../UI/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ControlForm, ImageLaptop, SectionImg, SectionInputs, SubTitulo, TituloWelcome, ErrorSpan, Spanhere } from './style';

export interface ICadatro {
  firtname: string,
  lastname: string,
  birthdate: string,
  country: string,
  city: string,
  email: string,
  password: string,
  confirpassword: string,
}



const Cadastro: React.FC<ICadatro> = () => {
  let navigate = useNavigate();

  const [itemStorage, setItemStorage] = useState({
    firstname: '',
    lastname: '',
    birthdate: '',
    country: '',
    city: '',
    email: '',
    password: '',
    confirpassword: ''
  });

  const [inputNameError, setInputNameError] = useState(true)
  const [inputLastnameError, setInputLastnameError] = useState(true)
  const [inputBirthError, setInputBirthError] = useState(true)
  const [inputCountryError, setInputCountryError] = useState(true)
  const [inputCityError, setInputCityError] = useState(true)
  const [inputEmail, setInputEmail] = useState(true)
  const [Inputpasswconf, setInputpasswconf] = useState(true)
  const [Inputpassword, setInputpassword] = useState(true)


  const armazenar = (chave: string, valor: any) => {
    localStorage.setItem(chave, JSON.stringify(valor))
  }

  const submit = (e?: any) => {
    armazenar('objt', itemStorage)
    validation()
    navigate('/login')
  }


  const emailRegex = (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
  
  const validation = () => {
    
    if (itemStorage.firstname === "" || itemStorage.firstname.length < 2) {
      setInputNameError(true)
    } else {
      setInputNameError(false)
    }

    if(itemStorage.lastname === "" || itemStorage.lastname.length < 2 ){
      setInputLastnameError(true)
    }else{
      setInputLastnameError(false)
    }

    if(itemStorage.country === "" || itemStorage.country.length < 2 ){
      setInputCountryError(true)
    }else{
      setInputCountryError(false)
    }

    if(itemStorage.city === "" || itemStorage.city.length < 2 ){
      setInputCityError(true)
    }else{
      setInputCityError(false)
    }

    if(itemStorage.birthdate === ""){
      setInputBirthError(true)
    }else{
      setInputBirthError(false)
    }

    if (emailRegex.test(itemStorage.email) && itemStorage.email !== '') {
      setInputEmail(false)
    } else {
      setInputEmail(true)
    }


    if (itemStorage.password === "" || (itemStorage.password).length < 6) {
      setInputpassword(true)
    } else {
      setInputpassword(false)
    }
    console.log('itemStorage.password: ', itemStorage.password)

    if (itemStorage.password !== itemStorage.confirpassword || itemStorage.confirpassword === "") {
      setInputpasswconf(true)
    } else {
      setInputpasswconf(false)
    }
    console.log('itemStorage.confirpassword: ', itemStorage.confirpassword)
    
    console.log(itemStorage)


  }
  


  return (
    <>
      <ControlForm>
        <SectionInputs>
          <TituloWelcome className='titleWelcome'>Welcome,
            <SubTitulo className='second-title'>Please, register to continue.</SubTitulo></TituloWelcome>
          <form>
            <Input
              id='firstname'
              label="first name"
              type="text"
              value={itemStorage.firstname}
              onChange={(e) => setItemStorage({ ...itemStorage, firstname: e })}
              placeholder='Your first name'
              marginLeft={18}
              onBlur={validation}
            />
            {inputNameError && <ErrorSpan>First name is required</ErrorSpan>}
            <Input
              label="last name"
              type="text"
              value={itemStorage.lastname}
              onChange={(e) => setItemStorage({ ...itemStorage, lastname: e })}
              placeholder='Your last name'
              marginLeft={18}
              onBlur={validation}
            />
            {inputNameError && <ErrorSpan>Last name is required</ErrorSpan>}
            <Input
              label="birth date"
              type="date"
              value={itemStorage.birthdate}
              onChange={(e) => setItemStorage({ ...itemStorage, birthdate: e })}
              placeholder='MM/DD/YYYY'
              marginLeft={18}
              onBlur={validation}
            />
            {inputBirthError && <ErrorSpan>Birthday is required</ErrorSpan>}
            <Input
              label="Country"
              type="text"
              value={itemStorage.country}
              onChange={(e) => setItemStorage({ ...itemStorage, country: e })}
              placeholder='Your Country'
              marginLeft={18}
              onBlur={validation}
            />
            {inputCountryError && <ErrorSpan>Country name is required</ErrorSpan>}
            <Input
              label="City"
              type="text"
              value={itemStorage.city}
              onChange={(e) => setItemStorage({ ...itemStorage, city: e })}
              placeholder='Your City'
              marginLeft={18}
              onBlur={validation}
            />
            {inputCityError && <ErrorSpan>City name is required</ErrorSpan>}
            <Input
              label="e-mail"
              type="email"
              value={itemStorage.email}
              onChange={(e) => setItemStorage({ ...itemStorage, email: e })}
              placeholder='A valid e-mail here'
              marginLeft={18}
              onBlur={validation}
            />
            {inputEmail && <ErrorSpan>Email is not valid</ErrorSpan>}
            <Input
              label="password"
              type="password"
              value={itemStorage.password}
              onChange={(e) => setItemStorage({ ...itemStorage, password: e })}
              placeholder='Your password'
              marginLeft={18}
              onBlur={validation}
            />
            {Inputpassword && <ErrorSpan>Password is required and need to have 6 words</ErrorSpan>}
            <Input
              label="confirm password"
              type="password"
              value={itemStorage.confirpassword}
              onChange={(e) => setItemStorage({ ...itemStorage, confirpassword: e })}
              placeholder='Comfirm your password'
              marginLeft={18}
              onBlur={validation}
            />
            {Inputpasswconf && <ErrorSpan>Confirm password is not equal</ErrorSpan>}
            <Button
              type='submit'
              label="Register Now"
              width={471}
              background='linear-gradient(90deg, #FF2D04 0%, #C13216 100%)'
              height={67}
              fontSize={32}
              marginleft={2}
              margintop={10}
              onClick={(e) => submit(e)}
            />
            <SectionImg>
              <Spanhere style={{ color: "#fff" }}>
                You have cadastre click<Link style={{ color: "white" }} to='/login'> here</Link>
              </Spanhere>
            </SectionImg>
          </form>
        </SectionInputs>
        <ImageLaptop>
          <a href='https://compass.uol/pt/sobre-nos/'><img style={{ marginLeft: "25%", marginTop: "3%" }} src={logoUol} /></a>
        </ImageLaptop>
      </ControlForm>
    </>
  )
}


export default Cadastro;