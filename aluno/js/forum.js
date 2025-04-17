let listaTopicos = document.getElementById('listaTopicos');

function criarTopico() {
    const titulo = document.getElementById('tituloTopico').value.trim();
    const conteudo = document.getElementById('conteudoTopico').value.trim();

    if (titulo === "" || conteudo === "") {
        alert('Preencha todos os campos!');
        return;
    }

    const topico = document.createElement('div');
    topico.classList.add('topico');

    topico.innerHTML = `
        <h3>${titulo}</h3>
        <p>${conteudo}</p>
        <div class="botoes-topico">
            <button onclick="mostrarRespostas(this)">Comentários (<span class="resposta-count">0</span>)</button>
        </div>
        <div class="respostas">
            <div class="nova-resposta">
                <input type="text" placeholder="Escreva um comentário...">
                <button onclick="adicionarResposta(this)">Enviar</button>
            </div>
        </div>
    `;

    listaTopicos.prepend(topico);

    document.getElementById('tituloTopico').value = '';
    document.getElementById('conteudoTopico').value = '';
}

function mostrarRespostas(botao) {
    const respostas = botao.parentElement.nextElementSibling;

    if (respostas.style.display === 'block') {
        respostas.style.display = 'none';
    } else {
        respostas.style.display = 'block';
    }
}

function adicionarResposta(botao) {
    const input = botao.previousElementSibling;
    const texto = input.value.trim();

    if (texto === '') {
        alert('Digite uma resposta!');
        return;
    }

    const resposta = document.createElement('div');
    resposta.classList.add('resposta');
    resposta.textContent = texto;

    botao.parentElement.parentElement.appendChild(resposta);

    input.value = '';

    // Atualiza contador de respostas
    const respostaCount = botao.closest('.topico').querySelector('.resposta-count');
    respostaCount.textContent = parseInt(respostaCount.textContent) + 1;
}

function curtirTopico(botao) {
    const likeCount = botao.querySelector('.like-count');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
}
