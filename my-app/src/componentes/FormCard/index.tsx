import { Card, PCard, Span } from "./style";
import Button from "../UI/Button";
import { Div, Divcard, Time } from "../../container/Dashboard/style";
import { getBackgroundColor } from "../../util";


interface Props {
    item: any,
    Click: (id: string) => void
}

const FormCard = ({ item, Click}: Props) => {
    return (
        <>
         <Divcard>
            <Div>
                <Time style={getBackgroundColor(item.dayOfWeek)}>{item.createdAt.slice(11, 16)}</Time>
            </Div>
            <Div>
                <Card key={item._id}>
                    <Span style={getBackgroundColor(item.dayOfWeek)} />
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
                        onClick={() => Click(item._id)}
                    />
                </Card>
            </Div>
            </Divcard>
        </>
    )
}
export default FormCard;