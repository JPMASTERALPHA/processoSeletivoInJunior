const booksByCategory = [
    {
        category : "Romance",
        books : [
            {
                title: "O Sol também é uma estrela",
                author: "Nicola Yoon",
            },
            {
                title: "O Noivo da minha melhor amiga",
                author: "Emily Giffin",
            },
            {
                title: "Orgulho e Preconceito",
                author: "Jane Austen",
            },
        ],
    },
    {
        category: "Fantasia",
        books: [
            {
                title: "Harry Potter e a Pedra Filosofal",
                author: "J.K. Rowling",
            },
            {
                title: "O Hobbit",
                author: "J.R.R. Tolkien",
            },
            {
                title: "Eragon",
                author: "Christopher Paolini",
            },
            {
                title: "O nome do vento",
                author: "Patrick Rothfuss",
            },
        ],
    },
    {
        category: "Suspense",
        books: [
            {
                title: "A Garota no Trem",
                author: "Paula Hawkins",
            },
            {
                title: "O Silêncio dos Inocentes",
                author: "Thomas Harris",
            },
        ],
    },
    {
        category: "Ficção Científica",
        books: [
            {
                title: "Duna",
                author: "Frank Herbert",
            },
            {
                title: "Neuromancer",
                author: "William Gibson",
            },
            {
                title: "Fundação",
                author: "Isaac Asimov",
            },
            {
                title: "1984",
                author: "George Orwell",
            },
            {
                title: "O fim da infância",
                author: "Arthur C. Clarke",
            },
        ],
    },
];

function countBooksByCategory(library) {
    let collection = {};
    for (let section of library) {
        collection[section.category] = section.books.length;
    }
    return collection;
}

function authors(library) {
    let collection = [];
    for (let section of library) {
        for (let livro of section.books) {
            if (!collection.includes(livro.author)) {
                collection.push(livro.author);
            }
        }
    }
    return collection;
}

console.log(countBooksByCategory(booksByCategory))
console.log(authors(booksByCategory))