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

function addBookToLibrary(e) {
  e.preventDefault();

  let formData = new FormData(form);

  let title = formData.get('title');
  let author = formData.get('author');
  let pages = formData.get('pages');
  let isRead = formData.get('checkbox');
}

addNewBook.addEventListener('click', () => (modal.style.display = 'block'));
overlay.addEventListener('click', () => (modal.style.display = 'none'));
addBook.addEventListener('click', addBookToLibrary);
