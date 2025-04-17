
function sendMessage() {
    let input = document.getElementById("messageInput");
    let message = input.value.trim();
 
    if (message !== "") {
        let chatBox = document.getElementById("chatBox");
 
        let newMessage = document.createElement("div");
        newMessage.classList.add("message", "sent");
        newMessage.innerHTML = `<span class="sender">Você:</span><p>${message}</p>`;
 
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
        input.value = "";
    }
 }
 