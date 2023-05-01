import { ISupermarket } from "./supermarket";

// Many productos to one supermaerkt (many to one)
export interface IProduct {
    id: number,
    title: string,
    price: number,
    quantity: number, //stock
    supermarket: ISupermarket, // Many to One
}