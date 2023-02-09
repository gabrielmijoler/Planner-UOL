import { Card, PCard, Span } from "./style";
import Button from "../UI/Button";


const CardItem = (props: any) => {
    return (
        <>
        {props.card.map((item: any, id: number) => (
                <Card key={id}>
                    <Span/>
                    <PCard>{item.item.description}</PCard>
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
                        }}
                    />
                </Card>
            ))
        }
        </>
    )
}

export default CardItem;