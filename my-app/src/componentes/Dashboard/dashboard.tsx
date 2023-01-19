import React, { useState } from 'react';
import { ControlDashboard, Head, Imagemlogo, Main, Nav, SectionWeek, Time, Weeks } from '.';
import CardItem from '../Card/card';
import Header from '../Header/header';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import dashlogo from '../Image/dashlogo.svg';



const Dashboard: React.FC = (props:any) => {
  const [inputest, setInputest] = useState<string>('')

  return (
    <>
      <Header/>
      <Head>
          <Input 
            size={14} 
            width={391} 
            height={45} 
            placeholder={''}
            color={'rgba(0, 0, 0, 0.7);'}
            borderRadius={10}
            background={'#fff'}
          />
          <Input size={14} 
            width={240} 
            height={45} 
            placeholder={''}
            color={'rgba(0, 0, 0, 0.7);'}
            borderRadius={10}
            background={'#fff'}
            />
          <Input size={14} 
            width={120} 
            height={45} 
            placeholder={''}
            color={'rgba(0, 0, 0, 0.7);'}
            borderRadius={10}
            background={'#fff'}
            />
          <Button label='Add to calendar' width={200}></Button>
          <Button label='Delete All' width={200}></Button>
      </Head>
      <SectionWeek>
            <Weeks/>
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
        </Nav>
        <Main>
            <CardItem  labela={inputest} id={1}/>
            <Imagemlogo src={dashlogo}></Imagemlogo>
        </Main>
      </ControlDashboard>
      

    </>
    )
  }


export default Dashboard;