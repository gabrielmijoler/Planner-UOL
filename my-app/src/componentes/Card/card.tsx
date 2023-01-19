import { Card, PCard, Span } from ".";
import Button from "../UI/Button/Button";

export interface ICard{
    labela?: string;
    id: number;
}

const CardItem = ({labela, id}:ICard)=>{
    return (
        <Card key={id}>
            <Span/>
            <PCard>{labela}</PCard>
            <Button width={57} height={25} label={'Delete'} fontSize={14} boderRadius={6} borderColors={'#FF3D1F'}
                style={{
                    backgroud: '#FF3D1F',
                    display: 'flex',
                    padding: '10px 12px',
                    gap: '6px',
                    float: 'right',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} />
        </Card>
    )
}

export default CardItem;