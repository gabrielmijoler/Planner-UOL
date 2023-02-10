

export default interface CardItem {
    id: number,
    description: string,
    hour: string,
    day: string
}

export default interface Card {
    id: number,
    name: string,
    data: CardItem[],
}