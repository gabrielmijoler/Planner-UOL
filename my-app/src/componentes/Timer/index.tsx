import { PCard } from "../Card/style";
import { Time } from "../Dashboard/style";

export interface ICard {
    labela?: string;
    id: number;
}

const NavTime = ({ labela, id }: ICard) => {
    return (
        <Time key={id}>
            <PCard>{labela}</PCard>
        </Time>
    )
}

export default NavTime;