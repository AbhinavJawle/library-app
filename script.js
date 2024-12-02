
const bookDisplay = document.querySelector('.book-display');

const addButton = document.querySelector('.add-btn');
const dialog = document.getElementById("new-book-dialog");
const cancelDialogBtn = document.getElementById("cancelDialog");
const form = document.getElementById("book-form");
const isRead = document.getElementById("isRead");


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

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}




addButton.addEventListener('click', () => {    
    dialog.showModal();
});

form.addEventListener("submit", (event) => {

    event.preventDefault(); 
    
    const submittedTitle = document.getElementById('bookName').value;
    const submittedAuthor = document.getElementById('author').value;
    const submittedPages = document.getElementById('pages').value;
    const submittedIsRead = isRead.checked ? 'true' : 'false';

    addBookToLibrary(submittedTitle, submittedAuthor, submittedPages, submittedIsRead);
    form.reset();
    dialog.close();
    
});

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook);
    displayBooks();
    console.log(newBook)
    console.log(myLibrary);
}

// function createBookCard(title, author, pages, isRead){
//     // Create a book card container
//     const bookCard = document.createElement('div');
//     bookCard.classList.add('book-card'); 

//     // Create and set up child elements
//     const titleText = document.createElement('h3');
//     titleText.textContent = `Title: ${title}`;

//     const authorText = document.createElement('p');
//     authorText.textContent = `Author: ${author}`;

//     const pagesText = document.createElement('p');
//     pagesText.textContent = `Pages: ${pages}`;

//     const isReadText = document.createElement('p');
//     isReadText.textContent = `Read: ${isRead == 'true' ? 'Yes' : 'No'}`;
    

//     // Append elements to the book card
//     bookCard.append(titleText, authorText, pagesText, isReadText);
//     return bookCard;
// }


function displayBooks() {
    bookDisplay.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card'); 

        bookCard.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <p>Read: ${book.isRead == 'true' ? 'Yes' : 'No'}</p>
                <button class="toggle-read" data-index="${index}">Toggle Read</button>
                <button class="remove-book" data-index="${index}">Remove</button>
            `;

        bookDisplay.appendChild(bookCard)  
    }); 

    document.querySelectorAll('.toggle-read').forEach(button => {
        button.addEventListener('click', (e) => {
            const BookIndex = e.target.getAttribute('data-index');
            myLibrary[BookIndex].isRead == 'true' ? myLibrary[BookIndex].isRead = 'false' : myLibrary[BookIndex].isRead = 'true';
            displayBooks()
        })
    })

    
    document.querySelectorAll('.remove-book').forEach(button => {
        button.addEventListener('click', (e) => {
            const BookIndex = e.target.getAttribute('data-index');
            console.log(BookIndex)
            myLibrary.splice(BookIndex, 1);
            displayBooks();
        })
    })
}


cancelDialogBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.reset();
    dialog.close();
  });
displayBooks();