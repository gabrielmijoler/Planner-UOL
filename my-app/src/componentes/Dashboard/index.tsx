import React, { useEffect, useState } from 'react';
import { Containerlist, ContainerWeek, ControlDashboard, DivPai, Head, Imagemlogo, InputWeeks, Pvazia, SectionButton, SectionWeek, Spanvazio } from './style';
import Header from '../Header';
import Button from '../UI/Button';
import Input from '../UI/Input';
import dashlogo from '../Image/dashlogo.svg';
import FormCard from '../FormCard';
import { getBackgroundColor } from '../../util';



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
  const deleteCard = (day:number) => {
  }


  const addCard = (event: any) => {
    event.preventDefault();
    const newList = [...list];
  
    const newItemsIndex = newList.findIndex((list: any) => list.name === inputDays.name);
    if(newItemsIndex !== -1){
      let newData: any = [...newList[newItemsIndex].data];
      newData.push({
        description: inpuDescription,
        hour: inpuTime,
        day: inputDays.name,
        id: newData.length + 1,
      });
    
      newList[newItemsIndex] = {
        ...newList[newItemsIndex],
        data: newData,
      };
      setList(newList);
    }
  };


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
            days.map((value, key) => <option key={key} value={value.id}>{value.name}</option>)
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
        <ContainerWeek>
          {days.map((item) =>
            <SectionWeek onClick={() => Clickselect(item.name)} key={item.id} style={getBackgroundColor(item.name)}>
              {item.name}
            </SectionWeek>
          )}
        </ContainerWeek>
        <div>
          <Spanvazio>Time</Spanvazio>
          <Pvazia/>
        </div>
        {list.map((data: any, idx: any) => {
          return (
            <div key={idx}>
              { selection === data.name && (
                data.data.map((value: any, idcard: number) => {
                  return (
                    <ControlDashboard key={idcard}>
                      <FormCard item={value} Click={props => deleteCard(props)} />
                    </ControlDashboard>
                  )
                })
              )}
            </div>
          )
        })}
          <Imagemlogo src={dashlogo}></Imagemlogo> 
  {/* postion absolute, z-index -1 */}
      </Containerlist>
    </DivPai>
  )
}


export default Dashboard;
