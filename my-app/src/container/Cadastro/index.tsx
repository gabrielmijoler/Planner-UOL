import React, { useEffect, useState } from 'react';
import Input from '../../componentes/UI/Input';
import logoUol from '../../Image/logouol.svg';
import Button from '../../componentes/UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ControlForm, ImageLaptop, SectionImg, SectionInputs, SubTitulo, TituloWelcome, ErrorSpan, Spanhere, Errorbutton } from './style';
import instance from '../../api';
import Toast from '../../componentes/Toast';




const Cadastro: React.FC = () => {
  let navigate = useNavigate();

  const [itemStorage, setItemStorage] = useState({
    firstname: "",
    lastname: "",
    birthdate: "",
    country: "",
    city: "",
    email: "",
    password: "",
    confirpassword: ""
  });
  const [inputNameError, setInputNameError] = useState(false)
  const [inputLastnameError, setInputLastnameError] = useState(false)
  const [inputBirthError, setInputBirthError] = useState(false)
  const [inputCountryError, setInputCountryError] = useState(false)
  const [inputCityError, setInputCityError] = useState(false)
  const [inputEmail, setInputEmail] = useState(false)
  const [Inputpasswconf, setInputpasswconf] = useState(false)
  const [Inputpassword, setInputpassword] = useState(false)
  const [SubmitError, setSubmitError] = useState(false)
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [type, setType] = useState('');

  // const armazenar = (chave: string, valor: any) => {
  //   localStorage.setItem(chave, JSON.stringify(valor))
  // }

  // const armazenarFullname = (chave: string, valor: any) => {
  //   localStorage.setItem(chave, JSON.stringify(valor))
  // }

  const submit = async (e?: any) => {
    e.preventDefault()
    if (itemStorage.firstname !== "" || itemStorage.lastname !== "" || itemStorage.birthdate !== "" || itemStorage.country !== "" ||
      itemStorage.city !== "" || itemStorage.email !== "" || itemStorage.password !== "" || itemStorage.confirpassword !== "") {
      setSubmitError(false)
    }
    await instance.post('users/sign-up', {
      "firstName": itemStorage.firstname,
      "lastName": itemStorage.lastname,
      "birthDate": itemStorage.birthdate,
      "city": itemStorage.city,
      "country": itemStorage.country,
      "email": itemStorage.email,
      "password": itemStorage.password,
      "confirmPassword": itemStorage.confirpassword
    }).then((response: any) => {
      navigate("/Login")
      e.preventDefault()
      console.log('response data:', response.data)
      if (response.data.status === 201) {
        setErrorMessage(response.data.message)
        setType('Sucess')
        setShowToast(true);
      }})
      .catch((err: any) => {
        console.log(err.response.data)
        if (err.response.status === 400) {
            setErrorMessage(err.response.data.message)
            setType('Error')
            setShowToast(true);
          } else if (err.response.status === 500) {
            setErrorMessage(err.response.data.message)
            setType('Error')
            setShowToast(true);
          }else {
            setErrorMessage('Ocorreu um erro desconhecido')
            setShowToast(true);
            setType('Warning')
          }
        });
    setSubmitError(true)
  }

  //  if (err.response && err.response.status === 400) {
  //   setErrorMessage(err.response.data.error)
  //   console.log(setErrorMessage)
  // } else if (err.response && err.response.status === 500) {
  //   setErrorMessage(err.response.data.error);
  // } else {
  //   setErrorMessage('Ocorreu um erro desconhecido');
  // }
  // armazenar('objt', itemStorage)
  // armazenarFullname('Fullname', itemStorage.firstname + " " + itemStorage.lastname)

  // let dataAtual = new Date();
  // let year = dataAtual.getFullYear();
  // const maxAge = year - 100;


  const emailRegex = (/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

  useEffect(() => {

  }, [itemStorage])

  const onBlurFirstName = () => {
    if (itemStorage.firstname === "" || itemStorage.firstname.length <= 2) {
      setInputNameError(true)
    } else {
      setInputNameError(false)
    }
  }
  const onBlurLasttName = () => {
    if (itemStorage.lastname === "" || itemStorage.lastname.length < 2) {
      setInputLastnameError(true)
    } else {
      setInputLastnameError(false)
    }

  }
  const onBlurCountry = () => {
    if (itemStorage.country === "" || itemStorage.country.length < 2) {
      setInputCountryError(true)
    } else {
      setInputCountryError(false)
    }
  }
  const onBlurCity = () => {
    if (itemStorage.city === "" || itemStorage.city.length < 2) {
      setInputCityError(true)
    } else {
      setInputCityError(false)
    }
  }
  // && itemStorage.birthdate.length < maxAge
  const onBlurBirthdate = () => {
    if (itemStorage.birthdate === "") {
      setInputBirthError(true)
    } else {
      setInputBirthError(false)
    }
  }
  const onBlurEmail = () => {
    if (emailRegex.test(itemStorage.email) && itemStorage.email !== '') {
      setInputEmail(false)
    } else {
      setInputEmail(true)
    }
  }
  const onBlurPassword = () => {
    if (itemStorage.password === "" || (itemStorage.password).length < 6) {
      setInputpassword(true)
    } else {
      setInputpassword(false)
    }
  }
  const onBlurConfirmPassword = () => {
    if (itemStorage.password !== itemStorage.confirpassword || itemStorage.confirpassword === "") {
      setInputpasswconf(true)
    } else {
      setInputpasswconf(false)
    }
  }


  return (
    <>
      <ControlForm>
      {showToast && <Toast mensage={errorMessage} type="Error" />}
        <SectionInputs>
          <TituloWelcome className='titleWelcome'>Welcome,
            <SubTitulo className='second-title'>Please, register to continue.</SubTitulo></TituloWelcome>
          <form>
            <Input
              padding={8}
              id='firstname'
              label="first name"
              type="text"
              value={itemStorage.firstname}
              onChange={(e) => setItemStorage({ ...itemStorage, firstname: e })}
              placeholder='Your first name'
              marginLeft={18}
              onBlur={onBlurFirstName}
              error={inputNameError}
            />
            {inputNameError && <ErrorSpan>First name is required</ErrorSpan>}
            <Input
              padding={8}
              label="last name"
              type="text"
              value={itemStorage.lastname}
              onChange={(e) => setItemStorage({ ...itemStorage, lastname: e })}
              placeholder='Your last name'
              marginLeft={18}
              onBlur={onBlurLasttName}
              error={inputLastnameError}
            />
            {inputLastnameError && <ErrorSpan>Last name is required</ErrorSpan>}
            <Input
              padding={8}
              label="birth date"
              type="date"
              value={itemStorage.birthdate}
              onChange={(e) => setItemStorage({ ...itemStorage, birthdate: e })}
              placeholder='MM/DD/YYYY'
              marginLeft={18}
              onBlur={onBlurBirthdate}
              error={inputBirthError}
            />
            {inputBirthError && <ErrorSpan>Birthday is required</ErrorSpan>}
            <Input
              padding={8}
              label="Country"
              type="text"
              value={itemStorage.country}
              onChange={(e) => setItemStorage({ ...itemStorage, country: e })}
              placeholder='Your Country'
              marginLeft={18}
              onBlur={onBlurCountry}
              error={inputCountryError}
            />
            {inputCountryError && <ErrorSpan>Country name is required</ErrorSpan>}
            <Input
              padding={8}
              label="City"
              type="text"
              value={itemStorage.city}
              onChange={(e) => setItemStorage({ ...itemStorage, city: e })}
              placeholder='Your City'
              marginLeft={18}
              onBlur={onBlurCity}
              error={inputCityError}
            />
            {inputCityError && <ErrorSpan>City name is required</ErrorSpan>}
            <Input
              padding={8}
              label="e-mail"
              type="email"
              value={itemStorage.email}
              onChange={(e) => setItemStorage({ ...itemStorage, email: e })}
              placeholder='A valid e-mail here'
              marginLeft={18}
              onBlur={onBlurEmail}
              error={inputEmail}
            />
            {inputEmail && <ErrorSpan>Email is not valid</ErrorSpan>}
            <Input
              padding={8}
              label="password"
              type="password"
              value={itemStorage.password}
              onChange={(e) => setItemStorage({ ...itemStorage, password: e })}
              placeholder='Your password'
              marginLeft={18}
              onBlur={onBlurPassword}
              error={Inputpassword}
            />
            {Inputpassword && <ErrorSpan>Password is required and need to have 6 words</ErrorSpan>}
            <Input
              padding={8}
              label="confirm password"
              type="password"
              value={itemStorage.confirpassword}
              onChange={(e) => setItemStorage({ ...itemStorage, confirpassword: e })}
              placeholder='Comfirm your password'
              marginLeft={18}
              onBlur={onBlurConfirmPassword}
              error={Inputpasswconf}
            />
            {Inputpasswconf && <ErrorSpan>Confirm password is not equal</ErrorSpan>}

            <div style={{ marginTop: '5%' }}>
              {SubmitError && <Errorbutton>There is empty field or invalid</Errorbutton>}
            </div>
            <Button
              type='submit'
              label="Register Now"
              width={471}
              background='linear-gradient(90deg, #FF2D04 0%, #C13216 100%)'
              height={67}
              fontSize={32}
              marginleft={2}
              margintop={1}
              onClick={(e) => submit(e)}
            />
            <SectionImg>
              <Spanhere marginleft={30}>
                If you have already registered<Link style={{ color: "white" }} to='/login'> here</Link>
              </Spanhere>
            </SectionImg>
          </form>
        </SectionInputs>
        <ImageLaptop>
          <a href='https://compass.uol/pt/sobre-nos/' ><img style={{ marginLeft: "25%", marginTop: "3%" }} alt="Site Compass" src={logoUol} /></a>
        </ImageLaptop>
      </ControlForm>
    </>
  )
}


export default Cadastro;