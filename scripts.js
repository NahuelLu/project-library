"use strict";

//Constructors
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

//Definitions
let myBooks=[];

const inputTitle = document.querySelector("#name");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");
const submitButton = document.querySelector("#form-button");
const showBooksButton = document.querySelector("#display-books-btn");
const divBooks = document.querySelector(".display-books-ctn");

//Functions
function addBookToLibrary(){ 
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let readState = inputRead.value;
    let newBook = new Book(title,author,pages,readState);
    myBooks.push(newBook);
}
function displayBooks(){
    myBooks.forEach(book => {
        createCard(book);
    });
}
function createCard(book){
    let card = document.createElement("div");
    divBooks.appendChild(card);
    card.className="card";
    createButtonOn(card);
    createDivsForBookInsideOf(card,book);
}
function createButtonOn(card){
    let btn=document.createElement("button");
    card.appendChild(btn);
    btn.className= "remove-btn";
    btn.textContent="REMOVE";
    btn.addEventListener("click",()=>{card.remove()});
}

function createDivsForBookInsideOf(parent,book){
    let titleDiv= document.createElement("div");
    let authorDiv = document.createElement("div");
    let pagesDiv= document.createElement("div");
    let readDiv= document.createElement("div");
    parent.appendChild(titleDiv);
    parent.appendChild(authorDiv);
    parent.appendChild(pagesDiv);
    parent.appendChild(readDiv);
    titleDiv.className="data"
    authorDiv.className="data"
    pagesDiv.className="data"
    readDiv.className="data"
    titleDiv.textContent=book.title;
    authorDiv.textContent=book.author;
    pagesDiv.textContent=book.pages;
    readDiv.textContent=book.read;
}

//Event listeners

submitButton.addEventListener("click",addBookToLibrary);
showBooksButton.addEventListener("click",displayBooks);
