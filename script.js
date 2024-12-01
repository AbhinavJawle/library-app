const addButton = document.querySelector('.add-btn');

const bookDisplay = document.querySelector('.book-display');

const myLibrary = [
    //initial books
    book1 = {
        title : 'Hail',
        author : 'autho1',
        pages : 124,
        isRead : true,
    },

    book2 = {
        title : 'Hail',
        author : 'autho1',
        pages : 124,
        isRead : true,
    },

    book3 = {
        title : 'Hail',
        author : 'autho1',
        pages : 124,
        isRead : true,
    },
    //books will add here
];

function createBookCard(title, author, pages, isRead) {
    // Create a book card container
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card'); // Optional: Add a class for styling

    // Create and set up child elements
    const titleText = document.createElement('h3');
    titleText.textContent = `Title: ${title}`;

    const authorText = document.createElement('p');
    authorText.textContent = `Author: ${author}`;

    const pagesText = document.createElement('p');
    pagesText.textContent = `Pages: ${pages}`;

    const isReadText = document.createElement('p');
    isReadText.textContent = `Read: ${isRead ? 'Yes' : 'No'}`;

    // Append elements to the book card
    bookCard.append(titleText, authorText, pagesText, isReadText);
    bookDisplay.appendChild(bookCard);
    return bookCard;
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
    let newBook = new Book('Abhinav bio', 'Abhi', 130, false);
    myLibrary.push(newBook);
  
}

addButton.addEventListener('click', () => {
    addBookToLibrary();
    displayBooks();
});

function displayBooks() {
    for (const book of myLibrary) {
        createBookCard(book.title, book.author, book.pages, book.isRead);
    }
}
