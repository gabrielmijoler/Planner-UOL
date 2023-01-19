import React from 'react';
import { Card, ControlDashboard, Head, Main, Nav, SectionWeek, Time, Weeks } from '.';
import Header from '../Header/header';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';



const Dashboard: React.FC = (props:any) => {


  return (
    <>
      <Header/>
      <Head>
          <Input size={14} placeholder={''}/>
          <Input size={14} placeholder={''}/>
          <Input size={14} placeholder={''}/>
          <Button label='Add to calendar' width={200}></Button>
          <Button label='Delete All' width={200}></Button>
      </Head>
      <SectionWeek>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
        </SectionWeek>
      <ControlDashboard>
        {/* <section>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
          <Weeks>asd</Weeks>
        </section> */}
        <Nav>
          <Time>asdasda</Time>
        </Nav>
        <Main>
          <Card>
            {/* <area style={{width:'14px',
              height: '85px',
              left: '128px',
              top: '459px',
              background: '#FF0024',
              borderRadius: '15px 0px 0px 15px'}}></area> */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit
          <Button/>
          </Card>
        </Main>
      </ControlDashboard>
      

    </>
    )
  }


export default Dashboard;