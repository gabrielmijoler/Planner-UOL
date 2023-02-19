import { useEffect, useState } from 'react';
import { ColorType, TostColors } from '../../util';
import { DivChildren, DivText, DivToast, SpanText } from './style';

interface Props {
    item: {message: string, type: 'warning' | 'error' | 'success' | 'info' | string}
}


const Toast = ({item}: Props) => {
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState({message: '', type:''});

    useEffect(()=>{
        if(showToast){
            setTimeout(() => {
                setShowToast(false)
                setMessage({message: '', type:''})
            }, 3000);
        }
    },[showToast])

    useEffect(()=>{
        if(item.message){
            setMessage(item)
            setShowToast(true)
        }
    },[item])

    return(
        <>
        {showToast &&(
            <DivToast >
                <DivChildren style={TostColors(message.type as keyof ColorType)}>
                        <DivText>
                            <SpanText>{message.message}</SpanText>
                        </DivText>
                </DivChildren>
            </DivToast>) 
        }
        </>
    )

}

export default Toast;