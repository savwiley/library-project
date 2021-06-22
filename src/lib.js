//LIBRARY
let myLibrary = [];

//GRABBING DIVS
const displayLibrary = document.querySelector(".library");
const loading = document.querySelector(".loading");

//BOOK OBJECT

//VALIDATES FORM
const iTitle = document.getElementById("bookTitle");
const iAuthor = document.getElementById("author");
const iPages = document.getElementById("pages");
const subBtn = document.getElementById("subBtn");

iTitle.addEventListener("input", () => {
  if (iTitle.validity.tooShort) {
    iTitle.setCustomValidity("Please input a title.");
  } else {
    iTitle.setCustomValidity("");
  }
});

iAuthor.addEventListener("input", () => {
  if (iAuthor.validity.tooShort) {
    iAuthor.setCustomValidity("Please input an author.");
  } else {
    iAuthor.setCustomValidity("");
  }
});

iPages.addEventListener("input", () => {
  if (iPages.validity.rangeUnderflow) {
    iPages.setCustomValidity("Please input page numbers.");
  } else {
    iPages.setCustomValidity("");
  }
});

let edit;
let editCount = 0;
subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (edit) {
    const element = document.querySelector(`div[data-i="${edit}"]`);
    const titleDiv = element.querySelector("#title");
    deleteBook(titleDiv.textContent);
    element.remove();
    edit = null;
  }
  if (
    iTitle.validity.valid &&
    iAuthor.validity.valid &&
    iPages.validity.valid
  ) {
    new Book(iTitle.value, iAuthor.value, iPages.value, editCount);
    storeArr();
    iTitle.value = "";
    iAuthor.value = "";
    iPages.value = "";
    editCount = 0;
  }
});

//gets random color
const randColor = () => {
  const color = Math.floor(Math.random() * 256);
  return color;
};

//STORES BOOKS IN LIBRARY ARRAY
function Book(title, author, pages, readCount = 0) {
  (this.title = title), (this.author = author), (this.pages = pages), (this.readCount = readCount);

  myLibrary.push({ title, author, pages, readCount });

  //create card
  const displayBook = document.createElement("div");
  displayBook.style.background = `linear-gradient(130deg, #ebebeb, rgba(${randColor()}, ${randColor()}, ${randColor()}))`;
  displayLibrary.appendChild(displayBook);
  displayBook.setAttribute("id", "book");
  displayBook.setAttribute("data-i", myLibrary.length);

  //create edit button
  const editBtn = document.createElement("i");
  editBtn.setAttribute("class", "far fa-edit");
  editBtn.setAttribute("data-i", myLibrary.length);
  editBtn.addEventListener("click", editButton);
  function editButton(e) {
    iTitle.value = title;
    iAuthor.value = author;
    iPages.value = pages;
    edit = e.path[0].dataset.i;
    editCount = readCount;
  }
  displayBook.appendChild(editBtn);

  /**
   * EDIT NEEDS WORK
   * I think, instead of using the submit btn's func, we need a whole new thing. It's a good solution until the read count was added. Find a way for both to exist.
   * 
   * It works right in Firestore. The problem is the myLibrary array. Things need to be edited in there *and* resubmited to Firestore.
   */

  //create delete button
  const delBtn = document.createElement("button");
  displayBook.appendChild(delBtn);
  delBtn.textContent = "X";
  delBtn.setAttribute("id", "delete");
  delBtn.setAttribute("data-i", myLibrary.length);
  delBtn.addEventListener("click", deleteButton);
  function deleteButton() {
    const btnNumb = delBtn.getAttribute("data-i");
    const del = document.querySelector(`div[data-i="${btnNumb}"]`);
    del.remove();
    deleteBook(title);
  }

  //create card content
  //link
  const linkTitle = title.split(" ").join("+");
  const bookLink = document.createElement("a");
  bookLink.setAttribute(
    "href",
    `https://www.google.com/search?q=${linkTitle}+novel`
  );
  displayBook.appendChild(bookLink);
  //title
  const displayBookTitle = document.createElement("div");
  bookLink.appendChild(displayBookTitle);
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
  //read count
  const displayBookCount = document.createElement("div");
  displayBook.appendChild(displayBookCount);
  displayBookCount.setAttribute("id", "count");
  displayBookCount.textContent = `read by ${readCount} users`;
  //read btn
  const readCountBtn = document.createElement("button");
  displayBook.appendChild(readCountBtn);
  readCountBtn.setAttribute("id", "readBtn");
  readCountBtn.textContent = "I've Read This!";
  readCountBtn.addEventListener("click", () => {
    updateCount();
  });
  async function updateCount() {
    displayBookCount.textContent = `read by ${readCount + 1} users`;
    readCountBtn.remove();
    let newNumb = readCount + 1;
    let data = {
      title: title,
      author: author,
      pages: pages,
      readCount: newNumb,
    };
    await firebase.firestore().collection("Books").doc(title).set(data);
  };

  /*
  //create read check
  //currently not remembered in server
  const check = document.createElement("input");
  displayBook.appendChild(check);
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", "read");
  const label = document.createElement("label");
  displayBook.appendChild(label);
  label.setAttribute("for", "read");
  label.textContent = "Finished?";
  */
}

//FIRESTORE
async function getArr() {
  const docs = await firebase.firestore().collection("Books").get();
  docs.forEach((e) => {
    new Book(e.data().title, e.data().author, e.data().pages, e.data().readCount);
  });
  loading.remove();
}
getArr();

async function deleteBook(title) {
  await firebase.firestore().collection("Books").doc(title).delete();
}

async function storeArr() {
  for (let i = 0; i < myLibrary.length; i++) {
    let data = {
      title: myLibrary[i].title,
      author: myLibrary[i].author,
      pages: myLibrary[i].pages,
      readCount: myLibrary[i].readCount,
    };
    await firebase.firestore().collection("Books").doc(data.title).set(data);
  }
}