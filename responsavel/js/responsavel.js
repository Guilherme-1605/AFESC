const aluno = {
    nome: "Lucas Silva",
    idade: 16,
    turma: "3º Ano B",
    tipoSanguineo: "O+",
    alergias: "Nenhuma",
    responsavel: {
        nome: "Maria Silva",
        telefone: "(11) 91234-5678"
    },
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

// Atualiza todas as informações
function atualizarInfos() {
    document.getElementById('dados-aluno').innerHTML = `
        <p><strong>Nome:</strong> ${aluno.nome}</p>
        <p><strong>Idade:</strong> ${aluno.idade}</p>
        <p><strong>Turma:</strong> ${aluno.turma}</p>
        <p><strong>Tipo Sanguíneo:</strong> ${aluno.tipoSanguineo}</p>
        <p><strong>Alergias:</strong> ${aluno.alergias}</p>
        <p><strong>Responsável:</strong> ${aluno.responsavel.nome}</p>
        <p><strong>Telefone:</strong> ${aluno.responsavel.telefone}</p>
    `;
}

function carregarPostagens() {
    const container = document.getElementById('postagens-aluno');
    container.innerHTML = "";
    aluno.posts.forEach(post => {
        container.innerHTML += `<p>${post}</p>`;
    });
}

function carregarLivros() {
    const ul = document.getElementById('livros-aluno');
    ul.innerHTML = "";
    aluno.livros.forEach(livro => {
        ul.innerHTML += `<li>${livro}</li>`;
    });
}

function carregarNotas() {
    const tbody = document.getElementById('notas-aluno');
    tbody.innerHTML = "";
    aluno.notas.forEach(nota => {
        tbody.innerHTML += `
            <tr>
                <td>${nota.materia}</td>
                <td>${nota.media}</td>
            </tr>
        `;
    });
}

// Função para preencher formulário de edição
function preencherFormulario() {
    document.getElementById('editar-nome').value = aluno.nome;
    document.getElementById('editar-idade').value = aluno.idade;
    document.getElementById('editar-turma').value = aluno.turma;
    document.getElementById('editar-sangue').value = aluno.tipoSanguineo;
    document.getElementById('editar-alergias').value = aluno.alergias;
    document.getElementById('editar-responsavel-nome').value = aluno.responsavel.nome;
    document.getElementById('editar-responsavel-telefone').value = aluno.responsavel.telefone;
}

// Salvar alterações
document.addEventListener("DOMContentLoaded", function () {
    atualizarInfos();
    carregarPostagens();
    carregarLivros();
    carregarNotas();
    preencherFormulario();

    document.getElementById('form-editar').addEventListener('submit', function (e) {
        e.preventDefault();

        aluno.nome = document.getElementById('editar-nome').value;
        aluno.idade = parseInt(document.getElementById('editar-idade').value);
        aluno.turma = document.getElementById('editar-turma').value;
        aluno.tipoSanguineo = document.getElementById('editar-sangue').value;
        aluno.alergias = document.getElementById('editar-alergias').value;
        aluno.responsavel.nome = document.getElementById('editar-responsavel-nome').value;
        aluno.responsavel.telefone = document.getElementById('editar-responsavel-telefone').value;

        atualizarInfos();
        alert("Informações atualizadas com sucesso!");
    });
});
