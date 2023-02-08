import React, { useState } from 'react';
import { ControlDashboard, Div, Divcard, DivPai, Head, Imagemlogo, InputWeeks, Main, Pvazia, SectionButton, SectionWeek, Spanvazio, Weeks } from './style';
import CardItem from '../Card/card';
import Header from '../Header';
import Button from '../UI/Button';
import Input from '../UI/Input';
import dashlogo from '../Image/dashlogo.svg';
import NavTime from '../Timer';



const Dashboard: React.FC = (props: any) => {
  const [inpuDescription, setInpuDescription] = useState('');
  const [inpuTime, setInpuTime] = useState('');
  const [dataTime, setDataTime] = useState('Monday')
  const [selection, setSelection] = useState('');

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const time = [
    {
      id: 1,
      dataTime: 'Monday',
      inpuTime: '10:10',
      inpuDescription: 'erro'
    },
    {
      id: 2,
      inpuTime: '10:10',
      inpuDescription: 'eita'
    },
    {
      id: 3,
      inpuTime: '10:10',
      inpuDescription: 'teste'
    },
    {
      id: 4,
      inpuTime: '9:20',
      inpuDescription: '9hr'
    },
    {
      id: 5,
      inpuTime: '9:20',
      inpuDescription: '9hr'
    },
    {
      id: 6,
      inpuTime: '9:20',
      inpuDescription: '9hr'
    },
    {
      id: 7,
      inpuTime: '9:20',
      inpuDescription: '9hr'
    },
    {
      id: 7,
      inpuTime: '9:20',
      inpuDescription: '9hr'
    },
    {
      id: 7,
      inpuTime: '9:20',
      inpuDescription: '9hr'
    },
  ]

  const handleSelect = (e: any) => {
    setDataTime(e.target.value)
  }
  const Clickselect = (e: any) => {
    setSelection(e.target.value)
  }


  const addCard = (event: any) => {
    event.preventDefault();

  };

  return (
    <DivPai>
      <Header />
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
          onChange={(e) => setInpuDescription(e)}
          value={inpuDescription}
        />
        <InputWeeks
          color={'rgba(0, 0, 0, 0.7);'}
          value={dataTime}
          onChange={e => handleSelect(e)}
        >
          {
            days.map((address, key) => <option key={key} value={address}>{address}</option>)
          }
        </InputWeeks>
        <Input
          size={14}
          width={120}
          height={45}
          placeholder='01h 32m'
          color={'rgba(0, 0, 0, 0.7);'}
          borderRadius={10}
          background={'#fff'}
          bordercolor={'#FECE00'}
          type={'time'}
          marginLeft={2}
          onChange={(e) => setInpuTime(e)}
          value={inpuTime}
        />
        <SectionButton >
          <Button
            label='Add to calendar'
            width={200}
            background='#00BA88'
            borderColors='#00BA88'
            onClick={addCard}
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
        {days.map((address, key) => <Weeks onClick={Clickselect} key={key} value={address}>{address}</Weeks>)}
      </SectionWeek>
      <ControlDashboard>
        <Main>
          <Divcard>
            <Div>
              <Spanvazio>Time</Spanvazio>
              <NavTime timeitem={time} />
            </Div>
            <Div>
              <Pvazia/>
              <CardItem card={time} id={props.id} />
            </Div>
          </Divcard>
          <Imagemlogo src={dashlogo}></Imagemlogo>
        </Main>
      </ControlDashboard>
    </DivPai>
  )
}

console.log(CardItem)

export default Dashboard;