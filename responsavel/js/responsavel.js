const aluno = {
    nome: "Lucas Silva",
    idade: 16,
    turma: "3º Ano B",
    posts: [
        "Estudando para a prova de matemática.",
        "Acabei de ler um livro muito bom!",
        "Participando do fórum de literatura."
    ],
    livros: [
        "O Pequeno Príncipe",
        "Dom Casmurro",
        "A Revolução dos Bichos"
    ],
    notas: [
        { materia: "Matemática", media: 8.5 },
        { materia: "Português", media: 9.0 },
        { materia: "História", media: 7.5 },
        { materia: "Geografia", media: 8.0 }
    ]
};

// Info Aluno
document.getElementById('dados-aluno').innerHTML = `
    <p><strong>Nome:</strong> ${aluno.nome}</p>
    <p><strong>Idade:</strong> ${aluno.idade}</p>
    <p><strong>Turma:</strong> ${aluno.turma}</p>
`;

// Posts
aluno.posts.forEach(post => {
    document.getElementById('postagens-aluno').innerHTML += `<p>${post}</p>`;
});

// Livros
aluno.livros.forEach(livro => {
    document.getElementById('livros-aluno').innerHTML += `<li>${livro}</li>`;
});

// Notas
aluno.notas.forEach(nota => {
    document.getElementById('notas-aluno').innerHTML += `
        <tr>
            <td>${nota.materia}</td>
            <td>${nota.media}</td>
        </tr>
    `;
});
