// representa categoria o genero de pelicula
//comedia, accion, terror, drama, sf, serie,

export interface IFilm {
    id: number,
    fullName: string,
    color: string,
    minAge: number,
    films: IFilm[]
    //films
}