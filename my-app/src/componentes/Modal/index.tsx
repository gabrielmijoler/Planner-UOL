import {DivModal, Div, Button, DivChildren} from './style';


type Props = {
    children: any;
    id?: string;
    onClose: (e: boolean) => void
}



const Modal = ({ children,  onClose, id='modal'}: Props) => {
    const hadleOutsideClick=(e:any)=>{
        if(e.target.id === id) onClose(e)
    }
    return (
        <DivModal id={id} onClick={hadleOutsideClick}>
            <Div>
                <Button 
                    onClick={() => onClose && onClose(false)}
                />
                <DivChildren>{children}</DivChildren>
            </Div>
        </DivModal>
    )

}
export default Modal;