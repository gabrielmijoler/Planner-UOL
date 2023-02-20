import React, { useEffect, useState } from 'react';
import Input from '../../componentes/UI/Input';
import logoUol from '../../Image/logouol.svg';
import Button from '../../componentes/UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ControlForm, ImageLaptop, SectionImg, SectionInputs, SubTitulo, TituloWelcome, ErrorSpan, Spanhere, Errorbutton } from './style';
import { getInstance } from '../../api';
import Toast from '../../componentes/Toast';

const instance = getInstance();



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
  const [errorMessage, setErrorMessage] = useState({ message: '', type: '' });

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
      console.log('response data:', response.data)
      if (response.data._id) {
        setErrorMessage({ message: "Usuário cadastrado com sucesso", type: 'success' })
        setTimeout(() => {
          navigate("/Login")
        }, 1500);
      }
    }).catch((err: any) => {
        console.log(err)
        setErrorMessage({ message: err?.response?.data?.errors ?? err?.response?.data ?? "Ocorreu um erro ao cadastrar", type: 'error' })
      }
      );
    setSubmitError(false)
  }

  // let dataAtual = new Date();
  // let year = dataAtual.getFullYear();
  // const maxAge = year - 100;



  useEffect(() => {

  }, [itemStorage])

  const onBlurFirstName = () => {
    const FirtName = !(itemStorage.firstname !== "" || itemStorage.firstname.length > 2)
    setInputNameError(FirtName)
  }

  const onBlurLasttName = () => {
    const LastName = !(itemStorage.lastname !== "" || itemStorage.lastname.length > 2)
    setInputLastnameError(LastName)
  }

  const onBlurCountry = () => {
    const Country = !(itemStorage.country !== "" || itemStorage.country.length > 2)
    setInputCountryError(Country)
  }
  const onBlurCity = () => {
    const City = !(itemStorage.city !== "")
    setInputCityError(City)
  }

  const onBlurBirthdate = () => {
    const Birthdate = !(itemStorage.birthdate !== "")
    setInputBirthError(Birthdate)
  }

  const onBlurEmail = () => {
    const emailRegex = (/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    const emailValidade = !(emailRegex.test(itemStorage.email) && itemStorage.email !== '')
    setInputEmail(emailValidade)
  }

  const onBlurPassword = () => {
    const Password = !(itemStorage.password !== "" || (itemStorage.password).length > 6)
    setInputpassword(Password)
  }
  const onBlurConfirmPassword = () => {
    const ConfirmPassword = !(itemStorage.password === itemStorage.confirpassword || itemStorage.confirpassword !== "")
    setInputpasswconf(ConfirmPassword)
  }


  return (
    <>
      <ControlForm>
        <Toast item={errorMessage} />
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