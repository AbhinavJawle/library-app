const bookDisplay = document.querySelector('.book-display');

const addButton = document.querySelector('.add-btn');

const dialog = document.getElementById("new-book-dialog");
const cancelDialogBtn = document.getElementById("cancelDialog");
const form = document.getElementById("book-form");

const isRead = document.getElementById("isRead");


const myLibrary = [
    //initial books
    book1 = {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        pages: 281,
        isRead: true,
    },
    
    book2 = {
        title: '1984',
        author: 'George Orwell',
        pages: 328,
        isRead: false,
    },
    
    book3 = {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        pages: 180,
        isRead: true,
    },
    
    book4 = {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        pages: 279,
        isRead: false,
    },
    
    book5 = {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        pages: 214,
        isRead: true,
    },
    
    book6 = {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 310,
        isRead: false,
    },
    
    book7 = {
        title: 'Moby-Dick',
        author: 'Herman Melville',
        pages: 635,
        isRead: true,
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
}


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
                <div class=card-button-div>
                    <button class="card-button toggle-read" data-index="${index}">
                        <i class="material-symbols-outlined">done_all</i>
                    </button>
                    
                    <button class="card-button remove-book" data-index="${index}"> 
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
            `;

        bookDisplay.appendChild(bookCard)  
    }); 

    document.querySelectorAll('.toggle-read').forEach(button => {
        button.addEventListener('click', (e) => {
            // Use the button as the target
            const BookIndex = e.currentTarget.getAttribute('data-index');
            if (BookIndex !== null) {
                myLibrary[BookIndex].isRead = myLibrary[BookIndex].isRead === 'true' ? 'false' : 'true';
                console.log('clicked');
                displayBooks();  // Re-render the book list
            }
        });
    });

    
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