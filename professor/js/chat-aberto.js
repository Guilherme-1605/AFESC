document.getElementById("sendButton").addEventListener("click", function() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
        const chatMessages = document.getElementById("chatMessages");
        const newMessage = document.createElement("div");
        newMessage.classList.add("message", "sent");
        newMessage.innerHTML = `<div>${messageText}</div>`;
        chatMessages.appendChild(newMessage);
        messageInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Resposta automática do professor após 2 segundos
        setTimeout(function() {
            const responseMessage = document.createElement("div");
            responseMessage.classList.add("message", "received");
            responseMessage.innerHTML = `<div>certo me conte mais</div>`;
            chatMessages.appendChild(responseMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 2000); // 2 segundos
    }
});

function startChat(professor, materia) {
    // Limpar o conteúdo atual do chat
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.innerHTML = '';

    // Criar o header do chat
    const chatHeader = document.createElement("div");
    chatHeader.classList.add("chat-header");
    chatHeader.innerHTML = `
        <h2>${professor}</h2>
        <span>${materia}</span>
    `;
    chatContainer.appendChild(chatHeader);

    // Criar a área de mensagens
    const chatMessages = document.createElement("div");
    chatMessages.classList.add("chat-messages");
    chatMessages.id = "chatMessages";
    chatMessages.innerHTML = `
    <div class="message sent">Oi, professora! Tenho uma dúvida sobre a matéria.</div>
        <div class="message received">Olá, como posso te ajudar?</div>
    
    `;
    chatContainer.appendChild(chatMessages);

    // Criar o campo de entrada de mensagem
    const chatInput = document.createElement("div");
    chatInput.classList.add("chat-input");
    chatInput.innerHTML = `
        <button class="emoji-button">😊</button>
        <input type="text" id="messageInput" placeholder="Digite uma mensagem...">
        <button id="sendButton">▶</button>
    `;
    chatContainer.appendChild(chatInput);

    // Adicionar funcionalidade de envio de mensagem
    document.getElementById("sendButton").addEventListener("click", function() {
        const messageInput = document.getElementById("messageInput");
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const chatMessages = document.getElementById("chatMessages");
            const newMessage = document.createElement("div");
            newMessage.classList.add("message", "sent");
            newMessage.innerText = messageText;
            chatMessages.appendChild(newMessage);
            messageInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
}