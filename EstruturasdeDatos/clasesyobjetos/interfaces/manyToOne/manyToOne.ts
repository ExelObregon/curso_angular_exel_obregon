import { IProduct } from "./products";
import { ISupermarket } from "./supermarket";

let yogures: IProduct{
id: 1,
title: 'yogures sabor a kiwi',
price: 4.99,
quantity: 6,
supermarket: mercadona
}

let pans: IProduct{
    id: 2,
    title: 'pan de pueblo',
    price: 0.99,
    quantity: 20,
    supermarket: mercadona
    }


    mercadona.products.push(yogures);
    mercadona.products.push(pan);

