//LIBRARY
let myLibrary = [];

//GRABBING LIBRARY DIV FROM HTML
const displayLibrary = document.querySelector(".library");

//BOOK OBJECT
function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
}

//STORES BOOKS IN LIBRARY ARRAY
function addBookToLibrary(title, author, pages) {
    let numbPages = Number(pages);
    if (numbPages <= 0) {
      return alert("Page number cannot be negative or zero.")
    }
    if (title.length <= 0 || author.length <= 0 || pages.length <= 0) {
      return alert("Please do not leave any forms blank.")
    }
      //create card
    const displayBook = document.createElement("div");
    displayLibrary.appendChild(displayBook);
    displayBook.setAttribute("id", "book");
    displayBook.setAttribute("data-i", myLibrary.length);
      //create delete button
    const delBtn = document.createElement("button");
    displayBook.appendChild(delBtn);
    delBtn.textContent = "X";
    delBtn.setAttribute("id", "delete");
    delBtn.setAttribute("data-i", myLibrary.length);
    delBtn.addEventListener('click', deleteButton);
    function deleteButton() {
      const btnNumb = delBtn.getAttribute("data-i");
      const del = document.querySelector(`div[data-i="${btnNumb}"]`);
      del.remove();
    }
      //create card content
        //title
      const displayBookTitle = document.createElement("div");
      displayBook.appendChild(displayBookTitle);
      displayBookTitle.setAttribute("id", "title");
      displayBookTitle.textContent = title;
       //author
      const displayBookAuthor = document.createElement("div");
      displayBook.appendChild(displayBookAuthor);
      displayBookAuthor.setAttribute("id", "author");
      displayBookAuthor.textContent = author;
        //page number
      const displayBookPages = document.createElement("div");
      displayBook.appendChild(displayBookPages);
      displayBookPages.setAttribute("id", "pages");
      displayBookPages.textContent = `${pages} Pages`;
      //create read check
    const check = document.createElement("input");
    displayBook.appendChild(check);
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "read");
    const label = document.createElement("label");
    displayBook.appendChild(label);
    label.setAttribute("for", "read");
    label.textContent = "Finished?";
  return myLibrary.push(new Book(title, author, numbPages));
}

//TESTING ARRAY
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295);
addBookToLibrary("Dune", "Frank Herbert", 412);
addBookToLibrary("Pet Semetary", "Stephen King", 373);
addBookToLibrary("A Game of Thrones", "George R.R. Martin", 694);






