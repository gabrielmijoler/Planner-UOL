import { TostColors } from '../../util';
import { DivToast } from './style';

interface Props {
    mensage: string;
    type: 'Warning' | 'Error' | 'Sucess' | 'Info';
}

const Toast = ({ mensage, type}: Props) => {
    return(
        <DivToast
            style={TostColors(type)}>
            {mensage}
        </DivToast> 
    )

}

export default Toast;