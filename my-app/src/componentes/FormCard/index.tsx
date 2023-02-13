import { Card, PCard, Span } from "./style";
import Button from "../UI/Button";
import CardItem from "../../model";
import { Div, Divcard, Time } from "../../container/Dashboard/style";
import { getBackgroundColor } from "../../util";


interface Props {
    item: CardItem,
    Click: (obj: CardItem) => void
}

const FormCard = ({ item, Click}: Props) => {
    console.log(item.name)
    return (
        <>
         <Divcard>
            <Div>
                <Time style={getBackgroundColor(item.day)}>{item.hour}</Time   >
            </Div>
            <Div>
                <Card key={item.id}>
                    <Span style={getBackgroundColor(item.day)} />
                    <PCard>{item.description}</PCard>
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
                        onClick={() => Click(item)}
                    />
                </Card>
            </Div>
            </Divcard>
            )
        </>
    )
}
export default FormCard;