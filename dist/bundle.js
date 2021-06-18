/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
eval("//LIBRARY\nlet myLibrary = []; \n\n/*\n  {\"title\": \"The Hobbit\", \"author\": \"J.R.R. Tolkien\", \"pages\": 295}, \n  {\"title\": \"Dune\", \"author\": \"Frank Herbert\", \"pages\": 412}, \n  {\"title\": \"Pet Semetary\", \"author\": \"Stephen King\", \"pages\": 373}, \n  {\"title\": \"A Game of Thrones\", \"author\": \"George R.R. Martin\", \"pages\": 694}, \n*/\n\n//GRABBING LIBRARY DIV FROM HTML\nconst displayLibrary = document.querySelector(\".library\");\n\n//BOOK OBJECT\n\n//VALIDATES FORM\nconst iTitle = document.getElementById(\"bookTitle\");\nconst iAuthor = document.getElementById(\"author\");\nconst iPages = document.getElementById(\"pages\");\nconst subBtn = document.getElementById(\"subBtn\");\n\niTitle.addEventListener(\"input\", () => {\n  if (iTitle.validity.tooShort){\n    iTitle.setCustomValidity(\"Do it right\");\n  } else {\n    iTitle.setCustomValidity(\"\");\n  }\n})\n\niAuthor.addEventListener(\"input\", () => {\n  if (iAuthor.validity.tooShort){\n    iAuthor.setCustomValidity(\"Do it right\");\n  } else {\n    iAuthor.setCustomValidity(\"\");\n  }\n})\n\niPages.addEventListener(\"input\", () => {\n  if (iPages.validity.rangeUnderflow){\n    iPages.setCustomValidity(\"Do it right\");\n  } else {\n    iPages.setCustomValidity(\"\");\n  }\n})\n\nsubBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (iTitle.validity.valid && iAuthor.validity.valid && iPages.validity.valid) {\n    new Book(iTitle.value, iAuthor.value, iPages.value);\n    storeArr();\n  }\n})\n\n//STORES BOOKS IN LIBRARY ARRAY\nfunction Book(title, author, pages) {\n  (this.title = title),\n  (this.author = author),\n  (this.pages = pages);\n\n  myLibrary.push({ title, author, pages });\n\n      //create card\n    const displayBook = document.createElement(\"div\");\n    displayLibrary.appendChild(displayBook);\n    displayBook.setAttribute(\"id\", \"book\");\n    displayBook.setAttribute(\"data-i\", myLibrary.length);\n\n      //create delete button\n    const delBtn = document.createElement(\"button\");\n    displayBook.appendChild(delBtn);\n    delBtn.textContent = \"X\";\n    delBtn.setAttribute(\"id\", \"delete\");\n    delBtn.setAttribute(\"data-i\", myLibrary.length);\n    delBtn.addEventListener('click', deleteButton);\n    function deleteButton() {\n      const btnNumb = delBtn.getAttribute(\"data-i\");\n      const del = document.querySelector(`div[data-i=\"${btnNumb}\"]`);\n      del.remove();\n      deleteBook(title);\n      //localStorage.removeItem(`item-${title}`);\n    }\n\n      //create card content\n        //title\n      const displayBookTitle = document.createElement(\"div\");\n      displayBook.appendChild(displayBookTitle);\n      displayBookTitle.setAttribute(\"id\", \"title\");\n      displayBookTitle.textContent = title;\n       //author\n      const displayBookAuthor = document.createElement(\"div\");\n      displayBook.appendChild(displayBookAuthor);\n      displayBookAuthor.setAttribute(\"id\", \"author\");\n      displayBookAuthor.textContent = author;\n        //page number\n      const displayBookPages = document.createElement(\"div\");\n      displayBook.appendChild(displayBookPages);\n      displayBookPages.setAttribute(\"id\", \"pages\");\n      displayBookPages.textContent = `${pages} Pages`;\n\n    //create read check\n    const check = document.createElement(\"input\");\n    displayBook.appendChild(check);\n    check.setAttribute(\"type\", \"checkbox\");\n    check.setAttribute(\"id\", \"read\");\n    const label = document.createElement(\"label\");\n    displayBook.appendChild(label);\n    label.setAttribute(\"for\", \"read\");\n    label.textContent = \"Finished?\";\n}\n\n\n//FIRESTOR\nasync function getArr() {\n  const docs = await firebase.firestore().collection(\"Books\").get();\n  docs.forEach(e => {\n    new Book(\n      e.data().title,\n      e.data().author,\n      e.data().pages,\n    )\n  })\n}\ngetArr();\n\nasync function deleteBook(title) {\n  await firebase.firestore().collection(\"Books\").doc(title).delete();\n}\n\nasync function storeArr() {\n  for (let i = 0; i < myLibrary.length; i++) {\n    let data = {\n      title: myLibrary[i].title,\n      author: myLibrary[i].author,\n      pages: myLibrary[i].pages,\n    }\n    await firebase.firestore().collection(\"Books\").doc(data.title).set(data);\n  }\n}\n\n\n\n//# sourceURL=webpack://library-project/./src/lib.js?");
/******/ })()
;