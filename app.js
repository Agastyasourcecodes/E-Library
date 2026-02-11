const mylibrary=[];

function Book(title,author,pages,isRead){
    this.id=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;



}
function addBookToLibrary(title,author,pages,isread){

const newBook=new Book(title,author,pages,isread);
mylibrary.push(newBook);
    
}

function displayBooks(){
    const container = document.getElementById("library"); 
    container.innerHtml="";
    for(let i=0;i<mylibrary.length;i++){
        const book=mylibrary[i];
    
    const p=document.createElement("p");
     p.textContent = 
      book.title + " by " + book.author + 
      " (" + book.pages + " pages) - " + 
      (book.isRead ? "Read" : "Not Read");

    container.appendChild(p);
    }
}

addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("Deep Work", "Cal Newport", 304, false);

displayBooks();
