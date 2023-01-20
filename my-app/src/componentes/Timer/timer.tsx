import { PCard } from "../Card";
import { Time } from "../Dashboard";

export interface ICard{
    labela?: string;
    id: number;
}

const NavTime = ({labela, id}:ICard)=>{
    return (
        <Time key={id}>
            <PCard>{labela}</PCard>
        </Time>
    )
}

export default NavTime;