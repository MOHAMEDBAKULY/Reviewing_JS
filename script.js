const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
/*
const book = getBook(2);
book;

// const title = book.title;
// title;

const { author, title, pages, publicationDate, hasMovieAdaptation, genres } =
  book;

console.log(author, title, genres);

// const primary = genres[0];
// const secondary = genres[1];
// const tertiary = genres[2];

// Rest Operator used to get the rest of values in an array or object
const [primary, ...restGenres] = genres;

console.log(primary, restGenres);

// Spread Operator used to attach exsiting data to newly introduced values
const newGenres = [...genres, "Educational", "Modern Travel"];
newGenres;

const newBook = {
  ...book,

  //  Adding a new Property
  bookPublicationDate: "2024-05-24",

  author: "Mohamed Bakuly",
  //  Overwriting an exsiting property
};
newBook;

// // Arrow functions
// function dateToday(str) {
//   return str.split("-")[0];
// }

const dateToday = (str) => str.split("-")[0];
console.log(dateToday(publicationDate));

// Template literals
const summary = `The movie ${title}, has different genres like ${
  genres[2]
}, it was written by ${author}, a script over ${pages}-pages,
The book has${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// Ternary Operators
const noPages = pages < 800 ? "Write more next time" : "Keep up the good work";
console.log(`The writer should ${noPages}`);

// Short-circuting and Logical Operators && -- ||
console.log(true && "Correct Answer");
console.log(false && "Correct Answer");
console.log(hasMovieAdaptation && "Correct Answer");

// The OR operator
console.log(true || "Correct Answer");
console.log(false || "Correct Answer");

console.log(book.translations.chinese);

const toChinese = book.translations.chinese || "Not Availble";
toChinese;

// Optional Chanining and Nullish Coalessing
function getTotalReviews(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviews(book));

function getTotalReviews(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const books = getBooks();

// Maps Array in javasrcipt
const mapNum = [10, 20, 30, 40, 50].map((num) => num * 2);
console.log(mapNum);

const titles = books.map((book) => book.title);
console.log(titles);

const page = books.map((book) => book.pages);
console.log(page);

const displayData = books.map((book) => ({
  bookTitle: book.title,
  bookAuthor: book.author,
  bookPages: book.pages,
  bookTranslation: book.translations,
  bookReviews: getTotalReviews(book),
}));

displayData;

// Filter Array in JavaScript
const filterBooks = books
.filter((book) => book.pages > 500)
.filter((book) => book.hasMovieAdaptation);
console.log(filterBooks);

const adventureBooks = books
.filter((book) => book.genres.includes("novel"))
.map((x) => x.pages);

// Reduce Array in JavaScript
const getAllPages = books.reduce((acc, book) => acc + book.pages, 0);
console.log(getAllPages);

const allAuthors = books.reduce((acc, writer) => acc + writer.author, 0);
console.log(allAuthors);

// Sort Array
const numbers = [14, 230, 8, 24, 50, 10];
const sorted = numbers.slice().sort((a, b) => a - b);
console.log(sorted);
console.log(numbers);

const sortPages = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortPages);

const sortByMap = books
.slice()
.sort((a, b) => a.pages - b.pages)
.map((book) => book);
console.log(sortByMap);

// Making of mutable Arrays Used in (Adding, Updating and Deleting of arrays)

const newBook = {
  id: 6,
  title: "Jumanji Wonderland in the Savannah",
  publicationDate: "2022",
  author: "The Rock",
  genres: ["fantasy", "adevnture", "fiction", "literature", "Parks"],
  hasMovieAdaptation: true,
  pages: 2043,
  translations: {
    Swahili: "Safari za Jumanji",
    Arabic: "أرض جومانجي العجائب في السافانا ",
    Spanish: "El país de las maravillas de Jumanji en la sabana",
    Chinese: "草原上的勇敢者遊戲仙境",
  },
  reviews: {
    goodreads: { rating: 4.89, ratingsCounts: 808774, reviewsCount: 64897 },
    librarything: { rating: 4.69, ratingsCounts: 67774, reviewsCount: 69867 },
  },
};

// Practising the immutable arrays (Adding Arrays)
const addBooks = [...books, newBook];
console.log(addBooks);

// Practising the immutable arrays (Deleting Arrays)
const deleteBooks = books.filter((book) => book.id !== 2);
deleteBooks;

// Practising the immutable arrays (Updating Arrays)
const updatedBooks = deleteBooks.map((book) =>
  book.id === 1 ? { ...books, pages: 1 } : book
);
updatedBooks;

const jokes = fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
.then((data) => console.log(data));
*/

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const getTodos = getData();
console.log(getTodos);
