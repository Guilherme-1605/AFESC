    // Script para alternar a visibilidade do menu lateral
    const menuToggle = document.getElementById("menuToggle");
    const menuLateral = document.getElementById("menuLateral");

    menuToggle.addEventListener("click", () => {
        menuLateral.classList.toggle("aberto");
    });

// Script para exibir um span ao clicar em sair
const botaoSair = document.getElementById("botaoSair");
const mensagemSpan = document.getElementById("mensagemSpan");

botaoSair.addEventListener("click", () => {
    mensagemSpan.textContent = "Você clicou em sair!";
    mensagemSpan.style.display = "inline";
});