import React, { useEffect, useState } from 'react';
import { Containerlist, ContainerWeek, ControlDashboard, Div, Divcard, DivPai, Head, Imagemlogo, InputWeeks, Main, Pvazia, SectionButton, SectionWeek, Spanvazio } from './style';
import CardItem from '../Card/card';
import Header from '../Header';
import Button from '../UI/Button';
import Input from '../UI/Input';
import dashlogo from '../Image/dashlogo.svg';
import NavTime from '../Timer';



const Dashboard: React.FC = (props: any) => {

  const days = [
    { name: "Monday", id: 1, data: [] },
    { name: "Tuesday", id: 2, data: [] },
    { name: "Wednesday", id: 3, data: [] },
    { name: "Thursday", id: 4, data: [] },
    { name: "Friday", id: 5, data: [] },
    { name: "Saturday", id: 6, data: [] },
    { name: "Sunday", id: 7, data: [] }
  ]

  const [inpuDescription, setInpuDescription] = useState("");
  const [inpuTime, setInpuTime] = useState("");
  const [inputDays, setInputDays] = useState(days[0])
  const [selection, setSelection] = useState("Monday");
  const [list, setList] = useState(days)


  const handleSelect = (e: any) => {
    const day: any = days.find((item: any) => item.id === Number(e.target.value)) // verifica se eh o msm id e retorna 
    setInputDays(day)
  }

  const Clickselect = (day: string) => {
    setSelection(day)
  }

  const getBackgroundColor = (dayName:string) => {
    let backgroundColor;
    switch (dayName) {
      case 'Monday':
        backgroundColor = "#FF0024";
        break;
      case 'Tuesday':
        backgroundColor = "#FF8000";
        break;
      case 'Wednesday':
        backgroundColor = "#FFCE00";
        break;
      case 'Thursday':
        backgroundColor = "rgba(255, 0, 36, 0.7)";
        break;
      case 'Friday':
        backgroundColor = "rgba(255, 128, 0, 0.7)";
        break;
      case 'Saturday':
        backgroundColor = "rgba(255, 206, 0, 0.7)";
        break;
      case 'Sunday':
        backgroundColor = "rgba(255, 0, 36, 0.5)";
        break;
      default:
        backgroundColor = "white";
    }
    return { backgroundColor: backgroundColor };
  };

  const addCard = (event: any) => {
    event.preventDefault();
    const newList: any = [...list]

    const newItems = newList.find((day: any) => day.name === inputDays.name)

    let newData: any = [...newItems.data] // criando
    newData.push({
      description: inpuDescription,
      hour: inpuTime,
      day: inputDays.name,
      id: newData.length + 1,
    })

    const newHandle = newList.map((days: any) => {
      if (days.name === newItems.name) {
        return {
          ...newItems,
          data: newData
        }
      }
      return days
    })

    setList(newHandle)
  };

  // const addCard = (event: any) => {
  //   event.preventDefault();
  //   const newList = [...list];
  
  //   const newItemsIndex = newList.findIndex((day: any) => day.name === inputDays.name);
  //   let newData: any = [...newList[newItemsIndex].data];
  //   newData.push({
  //     description: inpuDescription,
  //     hour: inpuTime,
  //     day: inputDays.name,
  //     id: newData.length + 1,
  //   });
  
  //   newList[newItemsIndex] = {
  //     ...newList[newItemsIndex],
  //     data: newData,
  //   };
  //   setList(newList);
  // };
  
  
  

  useEffect(() => {
    console.log(list)
  }, [list])

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
          value={inputDays.id}
          onChange={e => handleSelect(e)}
        >
          {
            days.map((address, key) => <option key={key} value={address.id}>{address.name}</option>)
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
      <Containerlist>
        {/* <SectionWeek onClick={Clickselect} key={data.id}>
                {data.name}
              </SectionWeek> */}

        <ContainerWeek>
          {days.map((days) =>
            <SectionWeek onClick={() => Clickselect(days.name)} key={days.id} style={getBackgroundColor(days.name)}>
              {days.name}
            </SectionWeek>
          )}
        </ContainerWeek>
        {list.map((data: any, idx: any) => {
          return (
            <div key={idx}>
              { selection === data.name && (
                data.data.map((value: any, idcard: number) => {
                  return (
                    <ControlDashboard key={idcard}>
                      <Main>
                        <Divcard>
                          <Div>
                            <Spanvazio>Time</Spanvazio>
                            <Spanvazio style={getBackgroundColor(data.name)}>{value.hour}</Spanvazio>
                          </Div>
                          <Div>
                            <Pvazia />
                            <div>{value.description}</div>
                          </Div>
                        </Divcard>
                        <Imagemlogo src={dashlogo}></Imagemlogo>
                      </Main>
                    </ControlDashboard>
                  )
                })
              )}
            </div>
          )
        })}
      </Containerlist>
    </DivPai>
  )
}


export default Dashboard;
