//Create an array called books in JavaScript. 
//It should contain the title and author of each book,
function book(title, autor, price = 0){
    this.title = title;
    this.autor = autor;
    this.price = price;
}
function booksArray(){
    this.arr = [""];


//if the book has been sold out or is in stock, plus the price of the book. 
    this.hasbook =function(bk){
        for (let i = 0 ; i < (books.length); i++){  
            if (books[i].title == bk.title){
                books[i].price = bk.price;
                return true;
            }
            
        return false;
    };
    this.display = function(){
    for (let i = 0 ; i < (books.length); i++){  
            console.log (books[i]);
        }
    };
    this.sortAlpha = function(){
        books.sort();
     };
    this.addBook = function(bk){
         books.push(bk);
         sortAlpha();
     };
}
//Add 3 books to the array. 
var arrayOfBooks = new booksArray();
arrayOfBooks.arr[0] = new book("Harry Poter", "Idontknow", 56);
arrayOfBooks.arr[0][1] = new book("Alcie", "Mickel", 23);
arrayOfBooks.arr[0][2] = new book("Ottoman Empire", "JackDaniel", 50);
//Show the elements of this array listed alphabetically in the HTML, and add a way for the user to add books. 

function init(){
    for (let i = 0 ; i < (books.length); i++){  
        let content = books[i];
        let li = document.createElement("li");
        li.appendChild(content);

        document.querySelector("ul").appendChild(li);
    }
}
//Style the HTML using CSS flex.
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener('click', 
    function(){
        let userInput = document.querySelector("input").value;
        if ( userInput != ''){
            // define user input as content of list item
            let content = document.createTextNode(userInput);
            let li = document.createElement("li");
            //place content to the list item, place list item to the list if :
            li.appendChild(content);
            ul.appendChild(li);
            // for a next round input empty input box
            document.querySelector("input").value = "";
        }
        
       
    });
}
