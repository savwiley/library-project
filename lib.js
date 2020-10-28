//LIBRARY
let myLibrary = [];

//GRABBING LIBRARY DIV FROM HTML
const displayLibrary = document.querySelector(".library");

//BOOK OBJECT
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      if (!read){
        return `${title} by ${author}, ${pages} pages, not read yet`
      } else {
        return `${title} by ${author}, ${pages} pages, already read`
      }
    }
  }

//STORES BOOKS IN LIBRARY ARRAY
function addBookToLibrary(title, author, pages, read) {
    let numbPages = Number(pages);
    return myLibrary.push(new Book(title, author, numbPages, read));
}


//LOOP THROUGH LIBRARY
function loopLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        const displayBook = document.createElement("div");
        displayLibrary.appendChild(displayBook);
        displayBook.setAttribute("id", "book");
        displayBook.textContent = myLibrary[i].info();
    }
    return;
}

//TESTING ARRAY
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Harry Potter", "J.K. Rowling", 200, true);
addBookToLibrary("Pet Semetary", "Stephan King", 400, true);
addBookToLibrary("A Game of Thrones", "George R.R. Martin", 500, false);



//NEW BOOK BUTTON

//when button's clicked, displays a form for someone to input a new book
//create a form that takes title, author, pages as text and read as radio buttons
//add button that submits form with addBookToLibrary()

const newBookBtn = document.querySelector("#newBookBtn");
newBookBtn.addEventListener ('click', testing());

/*
function testing() {
  let title = prompt('Book Title', 'Title');
  let author = prompt('Book Author', 'Anonymous');
  let pages = prompt('Amount of Pages', 000);
  let read = prompt('Did you read it yet?', 'No');
  addBookToLibrary(title, author, pages, read);
}
*/