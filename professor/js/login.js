const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const ra = form.querySelector('input[placeholder="RA:"]').value.trim();
    const senha = form.querySelector('input[placeholder="Senha:"]').value.trim();

    if (!ra || !senha) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Pegando alunos cadastrados
    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    // Verificando se existe algum aluno com RA e senha iguais
    const alunoEncontrado = alunos.find(aluno => aluno.ra === ra && aluno.senha === senha);

    if (alunoEncontrado) {
        alert('Login realizado com sucesso!');
        window.location.href = 'pagina-inicial.html'; // redireciona
    } else {
        alert('RA ou senha inválidos. Tente novamente.');
    }
});
