const addNewBook = document.getElementById('add-new');
const booksContainer = document.getElementById('books-container');
const modal = document.getElementById('modal');
const form = document.getElementById('form');
const overlay = document.getElementById('overlay');
const addBook = document.getElementById('add-book');

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = () =>
    `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
}

function getBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('is-read').checked;

  return new Book(title, author, pages, isRead);
}

function createNewBook(bookData) {
  let book = document.createElement('div');
  book.classList.add('book');

  let bookHeading = document.createElement('h3');
  bookHeading.classList.add('book-header');
  bookHeading.textContent = bookData.title;

  let bookAuthor = document.createElement('p');
  bookAuthor.textContent = `Author: ${bookData.author}`;

  let bookPages = document.createElement('p');
  bookPages.textContent = `Pages: ${bookData.pages}`;

  let bookButtonsContainer = document.createElement('div');
  bookButtonsContainer.classList.add('book-buttons-container');

  let bookIsReadButton = document.createElement('button');
  bookIsReadButton.id = 'mark';

  if (bookData.isRead) {
    bookIsReadButton.classList.add('book-button', 'mark-read');
    bookIsReadButton.textContent = 'Mark as read';
  } else {
    bookIsReadButton.classList.add('book-button', 'mark-unread');
    bookIsReadButton.textContent = 'Mark as unread';
  }

  let bookDeleteButton = document.createElement('button');
  bookDeleteButton.classList.add('book-button', 'delete');
  bookDeleteButton.textContent = 'Delete';

  bookButtonsContainer.appendChild(bookIsReadButton);
  bookButtonsContainer.appendChild(bookDeleteButton);

  book.appendChild(bookHeading);
  book.appendChild(bookAuthor);
  book.appendChild(bookPages);
  book.appendChild(bookButtonsContainer);

  return book;
}

function showBooks() {
  for (const book of myLibrary) {
    booksContainer.appendChild(book);
  }
}

function addBookToLibrary(e) {
  e.preventDefault();

  let bookData = getBook();

  let book = createNewBook(bookData);

  myLibrary.push(book);

  showBooks();

  modal.style.display = 'none';
}

addNewBook.addEventListener('click', () => (modal.style.display = 'block'));
overlay.addEventListener('click', () => (modal.style.display = 'none'));
addBook.addEventListener('click', addBookToLibrary);
