// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCcPq3J_Yeex39izUWyerDoNRPan9XWwJw",
  authDomain: "library-79cdb.firebaseapp.com",
  projectId: "library-79cdb",
  storageBucket: "library-79cdb.appspot.com",
  messagingSenderId: "603775734043",
  appId: "1:603775734043:web:47b551a4110cb35f2143be",
  measurementId: "G-CGHSMSDCVY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



//LIBRARY
let myLibrary = []; 

/*
  {"title": "The Hobbit", "author": "J.R.R. Tolkien", "pages": 295}, 
  {"title": "Dune", "author": "Frank Herbert", "pages": 412}, 
  {"title": "Pet Semetary", "author": "Stephen King", "pages": 373}, 
  {"title": "A Game of Thrones", "author": "George R.R. Martin", "pages": 694}, 
*/

//GRABBING LIBRARY DIV FROM HTML
const displayLibrary = document.querySelector(".library");

//BOOK OBJECT 
/*
function Book(title, author, pages, data){
    this.title = title
    this.author = author
    this.pages = pages
    this.data = data
} */

//VALIDATES FORM
const iTitle = document.getElementById("bookTitle");
const iAuthor = document.getElementById("author");
const iPages = document.getElementById("pages");
const subBtn = document.getElementById("subBtn");

iTitle.addEventListener("input", () => {
  if (iTitle.validity.tooShort){
    iTitle.setCustomValidity("Do it right");
  } else {
    iTitle.setCustomValidity("");
  }
})

iAuthor.addEventListener("input", () => {
  if (iAuthor.validity.tooShort){
    iAuthor.setCustomValidity("Do it right");
  } else {
    iAuthor.setCustomValidity("");
  }
})

iPages.addEventListener("input", () => {
  if (iPages.validity.rangeUnderflow){
    iPages.setCustomValidity("Do it right");
  } else {
    iPages.setCustomValidity("");
  }
})

subBtn.addEventListener('click', () => {
  if (iTitle.validity.valid && iAuthor.validity.valid && iPages.validity.valid) {
    new Book(iTitle.value, iAuthor.value, iPages.value);
    storeArr();
  }
})

//STORES BOOKS IN LIBRARY ARRAY
function Book(title, author, pages) {
  (this.title = title),
  (this.author = author),
  (this.pages = pages);

  myLibrary.push({ title, author, pages });

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
      localStorage.removeItem(`item-${title}`);
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
}


//LOCAL STORAGE
function getArr() {
  const keys = Object.keys(localStorage);
  for (let i = 0; i <= keys.length; i++) {
    const array = localStorage.getItem(keys[i]);
    const obj = JSON.parse(array);
    new Book(
      obj.title,
      obj.author,
      obj.pages
    );
  }
}
getArr();

function storeArr() {
  for (let i = 0; i < myLibrary.length; i++) {
    localStorage.setItem(`item-${myLibrary[i].title}`, JSON.stringify(myLibrary[i]));
  }
}





