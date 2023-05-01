import { IAddress } from "./address.model";
import { IUser } from "./userModel/usermodel";

let address1: IAddress = {
    id: 1,
    street: 'calle falsa123' ,
    postalCode: '123456',
    city: 'Madrid',
    country: 'Spain',

}

let address2: IAddress = {
    id: 2,
    street: 'calle falsa123',
    postalCode: '123456',
    city: 'Madrid',
    country: 'Spain',

}

let address3: IAddress = {
    id: 3,
    street: 'calle falsa123' ,
    postalCode: '123456',
    city: 'Madrid',
    country: 'Spain',

}


let user1: IUser = {
    id: 1,
    email: 'adad@gmail.com',
    birthday: new Date(2008-1-1),
    phone: '62295952',
    address: {
        id: 2,
        street: 'otra calle',
        postalCode: '2456',
        country: 'spain',
    }
}

console.log(`usuario ${user1.email} vive en ${ user1.address.city} y ${ user1.address.city}`);