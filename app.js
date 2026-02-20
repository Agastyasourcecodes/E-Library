const mylibrary = [];

function Book(title, author, pages, isRead, note = "") {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.note = note;

}

function saveToLocalStorage() {
    localStorage.setItem("mylibrary", JSON.stringify(mylibrary));
}
function loadFromLocalStorage() {
    const data = localStorage.getItem("mylibrary");
    if (data) {
        const parsed = JSON.parse(data);
        mylibrary.length = 0;
        mylibrary.push(...parsed);

    }

}



//add books function
function addBookToLibrary(title, author, pages, isread, note) {

    const newBook = new Book(title, author, pages, isread, note);
    mylibrary.push(newBook);
    saveToLocalStorage();

}
//display books
function displayBooks() {
    const container = document.getElementById("library");
    container.innerHTML = "";
    for (let i = 0; i < mylibrary.length; i++) {
        const book = mylibrary[i];
        const div = document.createElement("div");
        div.classList.add("book-card");

        const p = document.createElement("p");
        p.textContent =
            book.title + " by " + book.author +
            " (" + book.pages + " pages) - " +
            (book.isRead ? "Read" : "Not Read");




        //remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";

        removeBtn.onclick = () => {
            mylibrary.splice(i, 1);   // remove that book
            saveToLocalStorage();
            displayBooks();           // re-render
        };

        div.appendChild(p);
        if (book.note) {
            const noteEl = document.createElement("small");
            noteEl.textContent = "Note: " + book.note;
            div.appendChild(noteEl);
        }
        div.appendChild(removeBtn);


        container.appendChild(div);
    }


}

//add books via form
const btn = document.getElementById("addnewbook");
const form = document.getElementById("bookForm")
btn.addEventListener("click", () => {
    form.style.display = "block";

});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;
    const note = document.getElementById("note").value;
    addBookToLibrary(title, author, pages, isRead, note);
    displayBooks();
    form.reset();
    form.style.display = "none";
})

loadFromLocalStorage();
displayBooks();





