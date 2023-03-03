export interface Card {
    id?: number;
    code: string;
    rarity: string;
    category: string;
    name: string;
    life: number;
    cost: number;
    attribute: string;
    power: number;
    counter: number;
    color: string[];
    types: string[];
    effect: string;
    image: string;
}