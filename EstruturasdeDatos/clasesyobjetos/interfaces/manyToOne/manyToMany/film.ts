import { ICategory } from "./categorias";

export interface Film {
    id: number,
    title: string,
    minutes: number,
    rating: number,
    year: number,
    categories: ICategory[]
}