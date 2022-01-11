const addNewBook = document.getElementById('add-new');
const modal = document.getElementById('modal');
const form = document.getElementById('form');
const overlay = document.getElementById('overlay');
const addBook = document.getElementById('add-book');

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = () =>
    `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
}

addNewBook.addEventListener('click', () => (modal.style.display = 'block'));
overlay.addEventListener('click', () => (modal.style.display = 'none'));
