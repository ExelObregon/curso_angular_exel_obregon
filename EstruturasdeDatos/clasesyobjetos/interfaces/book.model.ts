interface IBook {
    id: number;
    title: string;
    author: string;
    year: number;
    editorial: string;
    numPages: number;
}

let book1: IBook = {
    id: 1,
    title: "book1",
    author: "author",
    year: 2023,
    editorial: "Planeta",
    numPages: 345
}

console.log(book1.title);

let book2: IBook = {
    id: 2,
    title: "book2",
    author: "author1",
    year: 2022,
    editorial: "Planeta",
    numPages: 305
}

console.log(book2.numPages);