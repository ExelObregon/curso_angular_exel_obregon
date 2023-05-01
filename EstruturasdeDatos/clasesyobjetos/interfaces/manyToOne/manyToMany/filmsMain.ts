import { ICategory } from "./categorias";

let comedia: ICategory = {
    id: 1,
    fullName: "comedia españalo",
    color: "amarillo",
    minAge: 7
    films: [],
}

let drama: ICategory = {
    id: 2,
    fullName: "Drama",
    color: "rojo",
    minAge: 12
    films: []
}

let titanic: IFilm = {
    id: 1,
    fullName: "titanic",
    minutes: 120,
    rating: 9.9,
    year: 1997,
    categories: [comedia, drama]
    films: []

}

let aTodogas: IFilm = {
    id: 2,
    fullName: "a todo gas 1",
    minutes: 150,
    rating: 7.9,
    year: 2007,
    categories: [comedia]
    films: []

}

// uni direccional, la asociacion se hace el modelo mas importante de la aplicacion

let titanic: IFilm = {
    id: 3,
    fullName: "rambo 20",
    minutes: 120,
    rating: 9.9,
    year: 1997,
    categories: [accion, comedia]
    films: []

}

// bi direccional (opcional)
comedia.films?.push(titanic);
console.log(comedia);

