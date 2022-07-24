//Constructors
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
//Definitions
let myBooks=[];

const inputName = document.querySelector("#name");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");
const submitButton = document.querySelector("#form-button");

//Functions
function addBookToLibrary(){ 
    let name = inputName.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let readState = inputRead.value;
    let newBook = new Book(name,author,pages,readState);
    myBooks.push(newBook);
}
//Event listeners
submitButton.addEventListener("click",addBookToLibrary)

