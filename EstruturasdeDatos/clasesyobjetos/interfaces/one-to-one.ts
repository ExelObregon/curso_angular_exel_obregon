/*crear un interfa para definir los atribusto de una direccon
fiscia que pertence a un usuario
*/

export interface IAddress {
    id: number;
    street: string;
    postalCode: string;
    city: string;
    country: string;
}

interface IUser {
    id: number;
    email: string;
    birthday: Date;
    Phone: string;
    address: Iaddress

}