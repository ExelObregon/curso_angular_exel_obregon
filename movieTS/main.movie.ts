// Crear clase Employee con atributos: id, firstname, salary, company

class Movie {

    // atributos

    id: number;
    title: string;
    year: number;
    director: string;
    gender: string;
    rate: string;
    
    
    // constructor
    constructor(id: number, title: string, year: number, director:string, gender: string, rate: string) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director; 
        this.gender = gender;
        this.rate = rate;
    }

    // métodos
    movie(): string {
        return `esta pelicula es ${this.title} y es del año ${this.year}`;
    }

}


console.log(Movie);

