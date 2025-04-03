 // Script para alternar a visibilidade do menu lateral
 const menuToggle = document.getElementById("menuToggle");
 const menuLateral = document.getElementById("menuLateral");

 menuToggle.addEventListener("click", () => {
     menuLateral.classList.toggle("aberto");
 });