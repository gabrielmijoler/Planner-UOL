import { Card, PCard, Span } from "./style";
import Button from "../UI/Button";
import { Div, Divcard, Time } from "../../container/Dashboard/style";
import { getBackgroundColor } from "../../util";


interface Props {
    item: any,
    Click: (id: string) => void
}
const TWO_MINUTES_IN_MS = 2 * 60 * 1000;

function hasExpired(createdAt: string): boolean {
    const currentTime = new Date().getTime(); 
    const createdTime = new Date(createdAt).getTime(); 
    return currentTime - createdTime > TWO_MINUTES_IN_MS; 
  }
const FormCard = ({ item, Click}: Props) => {
    const isExpired = hasExpired(item.createdAt);
    return (
        <>
         <Divcard>
            <Div>
                <Time style={isExpired ? { background: 'rgba(0, 0, 0, 0.7)', color:'#fff'} : getBackgroundColor(item.dayOfWeek)}>{item.createdAt.slice(11, 16)}</Time>
            </Div>
            <Div>
                <Card 
                key={item._id}
                >
                <span style={isExpired ? {width: '511px',
                    height: '3px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    border: '1px solid rgba(0, 0, 0, 0.7)',
                    position: 'absolute',
                    top: '50%'} :{ background: "none"}}/>
                <Span style={isExpired ? { background: 'rgba(0, 0, 0, 0.7)'} : getBackgroundColor(item.dayOfWeek)} />
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