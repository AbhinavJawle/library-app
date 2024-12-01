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

function createBookCard(title, author, pages, isRead){
    // Create a book card container
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card'); 

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
    return bookCard;
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

addButton.addEventListener('click', () => {
    let submittedTitle = prompt('Title: ')
    let submittedAuthor = prompt('Auth: ')
    let submittedPages = prompt('Pages: ')
    let submittedIsRead = prompt('isRead: ')

    let newBook = new Book(submittedTitle, submittedAuthor, submittedPages, submittedIsRead);
    addBookToLibrary(newBook)
    return newBook;
});

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    displayBooks();
    console.log(newBook)
    console.log(myLibrary);
}


function displayBooks() {
    bookDisplay.innerHTML = '';
    for (const book of myLibrary) {
        const bookCard = createBookCard(book.title, book.author, book.pages, book.isRead);
        bookDisplay.appendChild(bookCard);
    }
}

displayBooks();