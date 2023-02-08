import { PCard, Span } from "../Card/style";
import { Time } from "../Dashboard/style";



const NavTime = (props: any) => {
    return (
        <>
            {props.timeitem.map((item: any) => (
                    <Time key={item.id}>{item.inpuTime}</Time>
            ))}
        </>
    )
}

export default NavTime;