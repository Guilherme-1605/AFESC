const form = document.querySelector('.register-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // evita o envio padrão do formulário

    // Pegando os valores dos inputs
    const ra = form.querySelector('input[placeholder="RA"]').value.trim();
    const usuario = form.querySelector('input[placeholder="Usuário"]').value.trim();
    const idade = form.querySelector('input[placeholder="Idade"]').value.trim();
    const email = form.querySelector('input[placeholder="Email"]').value.trim();
    const senha = form.querySelector('input[placeholder="Senha"]').value.trim();

    // Validação simples
    if (!ra || !usuario || !idade || !email || !senha) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Criar objeto aluno
    const aluno = {
        ra,
        usuario,
        idade,
        email,
        senha
    };

    // Salvar no localStorage
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    alunos.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(alunos));

    alert('Cadastro realizado com sucesso!');

    // Redirecionar para página inicial
    window.location.href = 'pagina-inicial.html';
});
