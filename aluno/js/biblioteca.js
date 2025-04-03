const books = [
    { title: "Dom Quixote", category: "ficcao", image: "img/dom-quixote.jpg", description: "Aventura clássica de Cervantes." },
    { title: "1984", category: "ficcao", image: "img/1984.jpg", description: "Distopia de George Orwell." },
    { title: "A Arte da Guerra", category: "nao-ficcao", image: "img/arteguerra.jpg", description: "Clássico sobre estratégia." },
    { title: "O Pequeno Príncipe", category: "aventura", image: "img/pequeno-principe.jpg", description: "Uma história filosófica e encantadora." },
    { title: "Orgulho e Preconceito", category: "romance", image: "img/orgulho.jpg", description: "Romance clássico de Jane Austen." }
];

function displayBooks(filter = "todos") {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    books.forEach(book => {
        if (filter === "todos" || book.category === filter) {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book");
            bookCard.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.description}</p>
                <button>Ver Mais</button>
            `;
            bookList.appendChild(bookCard);
        }
    });
}

function filterBooks(category) {
    displayBooks(category);
}

document.getElementById("search").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks("todos");
    document.getElementById("book-list").innerHTML = "";
    filteredBooks.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.description}</p>
            <button>Ver Mais</button>
        `;
        document.getElementById("book-list").appendChild(bookCard);
    });
});

window.onload = () => displayBooks();