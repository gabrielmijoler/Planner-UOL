import React, { useState } from 'react';
import { ControlDashboard, Head, Imagemlogo, InputWeeks, Main, Nav, Pvazia, SectionButton, SectionWeek, Time, Weeks } from '.';
import CardItem from '../Card/card';
import Header from '../Header/header';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import dashlogo from '../Image/dashlogo.svg';
import NavTime from '../Timer/timer';



const Dashboard: React.FC = (props:any) => {
  const [inputest, setInputest] = useState<string>('')
  const [inputime, setInputime] = useState<string>('')

  return (
    <>
      <Header/>
      <Head>
          <Input 
            size={14} 
            width={391} 
            height={45} 
            placeholder='Task or issue'
            color={'rgba(0, 0, 0, 0.7);'}
            borderRadius={10}
            background={'#fff'}
            bordercolor={'#FECE00'}
            type={'text'}
          />
          <InputWeeks
            placeholder='Monday'
            color={'rgba(0, 0, 0, 0.7);'}
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </InputWeeks>
          <Input size={14} 
            width={120} 
            height={45} 
            placeholder='01h 32m'
            color={'rgba(0, 0, 0, 0.7);'}
            borderRadius={10}
            background={'#fff'}
            bordercolor={'#FECE00'}
            type={'time'}
            marginLeft={2}
            />
          <SectionButton >
            <Button 
              label='Add to calendar'
              width={200}
              background='#00BA88'
              borderColors='#00BA88'
              />
            <Button 
              label='Delete All' 
              width={200} 
              marginleft={5} 
              background='#FF3D1F'
              borderColors='#FF3D1F'
              />
          </SectionButton>
      </Head>
      <SectionWeek>
            <Weeks key={1}>Monday</Weeks>
            <Weeks >Tuesday</Weeks>
            <Weeks >Wednesday</Weeks>
            <Weeks >Thursday</Weeks>
            <Weeks >Friday</Weeks>
            <Weeks >Saturday</Weeks>
            <Weeks >Sunday</Weeks>
          {/* <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks> */}
        </SectionWeek>
      <ControlDashboard>
        <Nav>
          <Time>Time</Time>
          <NavTime id={1} labela={inputime}></NavTime>
        </Nav>
        <Main>
            <Pvazia></Pvazia>
            <CardItem labela={inputest} id={1}/>
            <Imagemlogo src={dashlogo}></Imagemlogo>
        </Main>
      </ControlDashboard>
      

    </>
    )
  }


export default Dashboard;