import { Card, PCard, Span } from "./style";
import Button from "../UI/Button";

export interface ICard{
    labela?: string;
    id: number;
}

const CardItem = ({labela, id}:ICard)=>{
    return (
        <Card key={id}>
            <Span/>
            <PCard>{labela}</PCard>
            <Button 
                width={57} 
                height={25} 
                label='Delete'
                fontSize={14}
                boderRadius={6}
                background='#FF3D1F'
                borderColors='#FF3D1F'
                style={{
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