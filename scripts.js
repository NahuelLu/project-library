"use strict";

//Constructors
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

//Definitions
let myBooks=[];     //Falta eliminar el libro del array cuando presionamos el btn de remove.
//Pero como no entiendo muy bien el enunciado lo hago dsp.

const inputTitle = document.querySelector("#name");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const submitButton = document.querySelector("#form-button");
const showBooksButton = document.querySelector("#display-books-btn");
const divBooks = document.querySelector(".display-books-ctn");
const toggleButton = document.querySelector("#toggle");

//Functions
function addBookToLibrary(){ 
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let readState;
    if(toggleButton.checked){
        readState="YES";
    }else{ 
        readState="NO";
    }
    let newBook = new Book(title,author,pages,readState);
    myBooks.push(newBook);
}
function displayBooks(){
    myBooks.forEach(book => {
        setCard(book);
    });
}
function setCard(book){
    let card = createCard();
    createButtonOn(card);
    createDivsForBookInsideOf(card,book);
}
function createCard(){
    let card = document.createElement("div");
    divBooks.appendChild(card);
    card.className="card";
    return card;
}
function createButtonOn(card){
    let btn=document.createElement("button");
    card.appendChild(btn);
    btn.className= "remove-btn";
    btn.textContent="REMOVE";
    btn.setAttribute("data-id","")
    btn.addEventListener("click",()=>{card.remove()});
}

function createDivsForBookInsideOf(card,book){
    let titleDiv= document.createElement("div");
    let authorDiv = document.createElement("div");
    let pagesDiv= document.createElement("div");
    let readDiv= document.createElement("div");
    card.appendChild(titleDiv);
    card.appendChild(authorDiv);
    card.appendChild(pagesDiv);
    card.appendChild(readDiv);
    titleDiv.className="data";
    authorDiv.className="data";
    pagesDiv.className="data";
    readDiv.className="data";
    titleDiv.textContent=book.title;
    authorDiv.textContent=book.author;
    pagesDiv.textContent=book.pages;
    readDiv.textContent=book.read;
}

//Event listeners

submitButton.addEventListener("click",addBookToLibrary);
showBooksButton.addEventListener("click",displayBooks);
