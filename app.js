const mylibrary=[];

function Book(title,author,pages,isRead){
    this.id=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;



}
//add books function
function addBookToLibrary(title,author,pages,isread){

const newBook=new Book(title,author,pages,isread);
mylibrary.push(newBook);
    
}
//display books
function displayBooks(){
    const container = document.getElementById("library"); 
    container.innerHTML="";
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

//add books via form
const btn=document.getElementById("addnewbook");
const form=document.getElementById("bookForm")
btn.addEventListener("click",()=>{
    form.style.display = "block";
   
});

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const title=document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;
    addBookToLibrary(title,author,pages,isRead);
    displayBooks();
    form.reset();
    form.style.display="none";
})



// addBookToLibrary("Atomic Habits", "James Clear", 320, true);
// addBookToLibrary("Deep Work", "Cal Newport", 304, false);

// displayBooks();
