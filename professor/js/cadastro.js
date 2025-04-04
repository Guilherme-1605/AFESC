document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;

    // Botão de voltar
    document.querySelectorAll('.back-button').forEach(button => {
        button.addEventListener('click', function() {
            if (document.referrer) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        });
    });
});
    // Processar formulário de cadastro de professor
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('.register-form');
        const componentsButton = document.querySelector('.components-button');
        const checkboxContainer = document.getElementById('checkboxContainer');
    
        if (componentsButton && checkboxContainer) {
            componentsButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Evita que o clique se propague
                checkboxContainer.classList.toggle('show');
            });
    
            document.addEventListener('click', function(event) {
                if (!componentsButton.contains(event.target) && !checkboxContainer.contains(event.target)) {
                    checkboxContainer.classList.remove('show');
                }
            });
        }
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
    
            const rg = document.getElementById('rg').value.trim();
            const username = document.getElementById('username').value.trim();
            const age = document.getElementById('age').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
    
            if (!rg || !username || !age || !email || !password) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
    
            const selectedComponents = [...document.querySelectorAll('input[name="componentes"]:checked')]
                .map(checkbox => checkbox.value);
    
            console.log('Cadastro de professor:', { rg, username, age, selectedComponents, email, password });
            alert('Cadastro realizado com sucesso!');
            form.reset();
        });
    });
    
    // Lista de matérias
const materias = ["Matemática", "Português", "História", "Ciências", "Geografia"];

const selectMateria = document.getElementById("materia");
const resultado = document.getElementById("resultado");

materias.forEach(materia => {
    let option = document.createElement("option");
    option.value = materia;
    option.textContent = materia;
    selectMateria.appendChild(option);
});


