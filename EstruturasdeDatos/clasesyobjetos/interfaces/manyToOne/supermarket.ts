import { IProduct } from "./products";

// One supermarket to many productos (one to mahy)
export interface ISupermarket {
    id: number,
    brandName: mercadona,
    m2: number,
    numEmployees: number,
    productos: IProduct[]  // One to Many
}