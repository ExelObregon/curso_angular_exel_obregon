interface IAuthor {
    idAuthor:number,
    firstName: string,
    dateFrom: Date,
    dateTo: Date | undefined,
    city: string,
    bio: string,
}

let author1: IAuthor = {
    idAuthor: 1,
    firstName: "Exel",
    dateFrom: new Date(2005-1-1),
    dateTo: undefined,
    city: "Madrid",
    bio: "loremipsum"
}

let author1: IAuthor = {
    idAuthor: 2,
    firstName: "Exel",
    dateFrom: new Date(2005-1-1),
    dateTo: new Date(2050-1-1),
    city: "Madrid",
    bio: "loremipsum"
