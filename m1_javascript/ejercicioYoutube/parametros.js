class Book {
    constructor(title, author, price){
        this.title = title
        this.author = author
        this.price = price
    }
    title = '1984';
    author = 'George Orwell';
    price = 350;

    }

    // Instancia de Book
    const book1 = new Book('1984', 'G.O.', 350);
    const book2 = new Book('Frankstein', 'M-S-.', 200);

    console.log(book1.title);
    console.log(book1.author);
    console.log(book1.price);