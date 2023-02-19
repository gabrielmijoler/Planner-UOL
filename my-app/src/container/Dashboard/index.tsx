import React, { useEffect, useState } from 'react';
import { Containerlist, ContainerWeek, ControlDashboard, DivButton, DivErro, DivInputs, DivPai, Head, Imagemlogo, InputWeeks, Pvazia, SectionWeek, Spanvazio } from './style';
import Header from '../../componentes/Header';
import Button from '../../componentes/UI/Button';
import Input from '../../componentes/UI/Input';
import dashlogo from "../../Image/dashlogo.svg"
import iconAdd from "../../Image/iconAdd.svg"
import iconNegativo from "../../Image/iconReduce.svg"
import FormCard from '../../componentes/FormCard';
import { getBackgroundColor } from '../../util';
import instance from '../../api';
import Toast from '../../componentes/Toast';


const Dashboard: React.FC = () => {
  const days = [
    { name: "monday", id: 1 },
    { name: "tuesday", id: 2 },
    { name: "wednesday", id: 3 },
    { name: "thursday", id: 4 },
    { name: "friday", id: 5 },
    { name: "saturday", id: 6 },
    { name: "sunday", id: 7 }
  ]

  const [inpuDescription, setInpuDescription] = useState("");
  const [selection, setSelection] = useState("monday");
  const [buttonSection, setButtonsection] = useState("monday");
  const [list, setList] = useState<any>([])
  const [errorMessage, setErrorMessage] = useState({ message: '', type: '' });

  const PostCard = async () => {
    await instance.post('events', {
      "dayOfWeek": selection,
      "description": inpuDescription,
    }).then((response: any) => {
      GetAll()
      setErrorMessage({ message: "Adicionado com sucesso", type: 'success' })
      console.log('response post:', response.data)
      console.log(response)
    })
      .catch((err) => {
        setErrorMessage({ message: err?.response?.data?.message ?? err?.response?.data ?? "Ocorreu um erro ao adicionar", type: 'error' })
        console.log(err)
        console.log('error status:', err.response.data)
      })
  }

  const DeleteCards = async () => {
    await instance.delete(`events?dayOfWeek=${buttonSection}`)
      .then((response: any) => {
        GetAll()
        setErrorMessage({ message: "Deletado com sucesso", type: 'success' })
        console.log('response delete:', response.data)
        console.log(response)
      }).catch((err) => {
        setErrorMessage({ message: err?.response?.data?.message ?? err?.response?.data ?? "Ocorreu um erro ao deletar todos", type: 'error' })
        console.log(err)
      })
  }

  const DeleteIDCard = async (id: string) => {
    await instance.delete(`events/${id}`)
      .then((response: any) => {
        GetAll()
        setErrorMessage({ message: "Deletado com sucesso", type: 'success' })
        console.log('response deleteid:', response)
      })
      .catch((err) => {
        console.log(err)
        setErrorMessage({ message: err?.response?.data?.message ?? err?.response?.data ?? "Ocorreu um erro ao deletar", type: 'error' })
        console.log('error status:', err.response.status)
      })
  }
  const GetAll = async () => {
    instance.get(`events?dayOfWeek=${buttonSection}`)
    .then((response: { data: React.SetStateAction<never[]> }) => { console.log("GetAll",response); setList(response.data) })
    .catch((err: any) => console.log(err))
  }


  const Clickselect = (day: any) => {
    setButtonsection(day)
    console.log("select", day)
  }

  useEffect(() => {
    GetAll()
  }, [buttonSection, selection])

  return (
    <DivPai>
      <Header />
      <Head>
        <DivInputs>
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
            value={selection}
            onChange={e => setSelection(e.target.value)}
          >
            {
              days.map((value: { name: string; }, key: React.Key) => <option key={key} value={value.name}>{value.name}</option>)
            }
          </InputWeeks>
        </DivInputs>
        <DivButton>
          <Button
            label='+ Add to calendar'
            width={200}
            height={44}
            background='#00BA88'
            borderColors='#00BA88'
            boderRadius={10}
            widthsize={700}
            fontSize={20}
            onClick={PostCard}
            marginright={1}
          />
          <Button
            label='- Delete All'
            width={200}
            height={44}
            boderRadius={10}
            widthsize={700}
            fontSize={20}
            background='#FF3D1F'
            borderColors='#FF3D1F'
            onClick={DeleteCards}
          />
        </DivButton>
      </Head>
      <Containerlist>
        <ContainerWeek>
          {days.map((item) =>
            <SectionWeek onClick={() => Clickselect(item.name)} key={item.id} style={getBackgroundColor(item.name)}>
              {item.name}
            </SectionWeek>
          )}
        </ContainerWeek>
        <Toast item={errorMessage} />
          <div>
            <Spanvazio>Time</Spanvazio>
            <Pvazia />
          </div>
          {list?.events?.length > 0 ? (
            list?.events?.map((item: any, idx: number) => {
              return (
                <ControlDashboard key={idx}>
                  <FormCard item={item} Click={() => DeleteIDCard(item._id)} />
                </ControlDashboard>
              )
            })) : (
            <DivErro>
              <h2>Vazia</h2>
            </DivErro>
            )
          }
          <Imagemlogo src={dashlogo}></Imagemlogo>
      </Containerlist>
    </DivPai>
  )
}


export default Dashboard;


// const handleSelect = (e: any) => {
  //   const day: any = days.find((item: any) => item.id === Number(e.target.value)) // verifica se eh o msm id e retorna 
  //   setInputDays(day)
  // const deleteCard = (item: CardItem, day: string) => {
  //   const indexDay = getIndexOfDay(day)
  //   const indexData = getIndexOfData(indexDay, item.id)
  //   const newList = updateList(indexDay, indexData)
  //   setList(newList)
  // };

  // const getIndexOfDay = (day: string) => list.findIndex(el => el.name === day)
  // const getIndexOfData = (indexDay: number, id: number) => list[indexDay].data.findIndex((el: any) => el.id === id)
  // const updateList = (indexDay: number, indexData: number) => [
  //     ...list.slice(0, indexDay),
  //     {
  //       ...list[indexDay],
  //       data: [
  //         ...list[indexDay].data.slice(0, indexData),
  //         ...list[indexDay].data.slice(indexData + 1),
  //       ]
  //     },
  //     ...list.slice(indexDay + 1),
  //   ]


  // const addCard = (event: any) => {
  //   event.preventDefault();
  //   const newList = [...list];

  //   const newItemsIndex = newList.findIndex((list: any) => list.name === inputDays.name);
  //   if (newItemsIndex !== -1) {
  //     let newData: any = [...newList[newItemsIndex].data];
  //     newData.push({
  //       description: inpuDescription,
  //       hour: inpuTime,
  //       day: inputDays.name,
  //       id: newData.length + 1,
  //     });

  //     newList[newItemsIndex] = {
  //       ...newList[newItemsIndex],
  //       data: newData,
  //     };
  //     setList(newList);
  //   }
  // };