


const books = [
    { "title": "The White Tiger", "author": "aravind Adiga", "year": 2008 },
    { "title": "The Immortals of Meluha", "author": "amish Tripathi", "year": 2010 },
    { "title": "2 States: The Story of My Marriage", "author": "Chetan Bhagat", "year": 2009 },
    { "title": "Half Girlfriend", "author": "chetan Bhagat", "year": 2014 },
    { "title": "The Palace of Illusions", "author": "Chitra Banerjee Divakaruni", "year": 2008 },
    { "title": "The God of Small Things", "author": "Arundhati Roy", "year": 1997 },
    { "title": "Sacred Games", "author": "Vikram Chandra", "year": 2006 },
    { "title": "The White Mountains", "author": "Aruna Nambiar", "year": 2020 }
]


const filteredBooks = books.filter((book) => book.year >= 2010);

const capitalizedAuthors = filteredBooks.map((book) => {
    return {
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year
    };
});

console.log(capitalizedAuthors);
