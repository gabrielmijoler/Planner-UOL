import { Card, PCard, Span } from "./style";
import Button from "../UI/Button";
import CardItem from "../../model";
import { Div, Divcard } from "../Dashboard/style";
import { getBackgroundColor } from "../../util";


interface Props {
    item: CardItem,
    Click: (id: number) => void
}

const FormCard = ({ item, Click }: Props) => {
    return (
        <>
         <Divcard>
            <Div>
                <Span style={getBackgroundColor(item.name)}>{item.hour}</Span>
            </Div>
            <Div>
                <Card key={item.id}>
                    <Span />
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
                        onClick={() => Click(item.id)}
                    />
                </Card>
            </Div>
            </Divcard>
            )
        </>
    )
}

export default FormCard;