import { PCard, Span } from "../FormCard/style";
import { Time } from "../Dashboard/style";



const NavTime = (props: any) => {
    return (
        <>
            {props.timeitem.map((item: any, idx: number) => (
                    <Time key={idx}>{item.hour}</Time>
            ))}
        </>
    )
}

export default NavTime;