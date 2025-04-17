let books = [
    { id: 1, title: "Dom Quixote", category: "ficcao", image: "img/dom-quixote.jpg", description: "Aventura clássica de Cervantes." },
    { id: 2, title: "1984", category: "ficcao", image: "img/1984.jpg", description: "Distopia de George Orwell." },
    { id: 3, title: "A Arte da Guerra", category: "nao-ficcao", image: "img/arteguerra.jpg", description: "Clássico sobre estratégia." },
    { id: 4, title: "O Pequeno Príncipe", category: "aventura", image: "img/pequeno-principe.jpg", description: "Uma história filosófica e encantadora." },
    { id: 5, title: "Orgulho e Preconceito", category: "romance", image: "img/orgulho.jpg", description: "Romance clássico de Jane Austen." }
];

let editingBookId = null;

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
                <button onclick="editBook(${book.id})">Atualizar</button>
                <button onclick="deleteBook(${book.id})" style="background:#DC2626;">Excluir</button>
            `;
            bookList.appendChild(bookCard);
        }
    });
}

function filterBooks(category) {
    displayBooks(category);
}

document.getElementById("search").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    document.getElementById("book-list").innerHTML = "";
    filteredBooks.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.description}</p>
            <button onclick="editBook(${book.id})">Atualizar</button>
            <button onclick="deleteBook(${book.id})" style="background:#DC2626;">Excluir</button>
        `;
        document.getElementById("book-list").appendChild(bookCard);
    });
});

document.getElementById("add-book-btn").addEventListener("click", () => {
    document.getElementById("book-form-container").style.display = "block";
    document.getElementById("book-form").reset();
    editingBookId = null;
});

document.getElementById("book-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const image = document.getElementById("book-image").value;
    const title = document.getElementById("book-title").value;
    const description = document.getElementById("book-description").value;
    const category = document.getElementById("book-category").value;

    if (editingBookId) {
        const index = books.findIndex(book => book.id === editingBookId);
        books[index] = { id: editingBookId, title, description, image, category };
    } else {
        const newBook = {
            id: Date.now(),
            title,
            description,
            image,
            category
        };
        books.push(newBook);
    }

    document.getElementById("book-form-container").style.display = "none";
    displayBooks();
});

function editBook(id) {
    const book = books.find(b => b.id === id);
    document.getElementById("book-image").value = book.image;
    document.getElementById("book-title").value = book.title;
    document.getElementById("book-description").value = book.description;
    document.getElementById("book-category").value = book.category;
    editingBookId = id;
    document.getElementById("book-form-container").style.display = "block";
}

function deleteBook(id) {
    if (confirm("Tem certeza que deseja excluir este livro?")) {
        books = books.filter(book => book.id !== id);
        displayBooks();
    }
}

window.onload = () => displayBooks();
