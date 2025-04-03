document.addEventListener("DOMContentLoaded", () => {
    const forumList = document.getElementById("forumList");
    const createForumBtn = document.getElementById("createForumBtn");
    const forumModal = document.getElementById("forumModal");
    const closeModal = document.querySelector(".close");
    const forumTitleInput = document.getElementById("forumTitle");
    const submitForumBtn = document.getElementById("submitForumBtn");

    let forums = [
        { title: "Cálculo Diferencial e Integral", comments: [] },
        { title: "Redação Nota 1000", comments: [] },
        { title: "Mitologia e História Antiga", comments: [] },
        { title: "Mudanças Climáticas", comments: [] },
        { title: "Astronomia e Astrofísica", comments: [] }
    ];

    function renderForums() {
        forumList.innerHTML = '';
        forums.forEach((forum, index) => {
            const forumItem = document.createElement('div');
            forumItem.className = "forum-item";
            forumItem.innerHTML = `
                <strong>${forum.title}</strong> 
                <button onclick="enterForum(${index})">Entrar</button>
                <div class="comments" id="comments-${index}">
                    <h4>Comentários:</h4>
                    ${forum.comments.map(comment => `<p class="comment">${comment}</p>`).join("")}
                    <input type="text" id="commentInput-${index}" placeholder="Escreva um comentário..." />
                    <button onclick="addComment(${index})">Comentar</button>
                </div>
            `;
            forumList.appendChild(forumItem);
        });
    }

    createForumBtn.addEventListener("click", () => {
        forumModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        forumModal.style.display = "none";
    });

    submitForumBtn.addEventListener("click", () => {
        const newForumTitle = forumTitleInput.value;
        if (newForumTitle) {
            forums.unshift({ title: newForumTitle, comments: [] });
            forumTitleInput.value = '';
            forumModal.style.display = "none";
            renderForums();
        }
    });

    window.enterForum = function (forumIndex) {
        alert(`Entrando no fórum: ${forums[forumIndex].title}`);
    };

    window.addComment = function (forumIndex) {
        const commentInput = document.getElementById(`commentInput-${forumIndex}`);
        if (commentInput.value.trim() !== "") {
            forums[forumIndex].comments.push(commentInput.value);
            commentInput.value = '';
            renderForums();
        }
    };

    window.addEventListener("click", (event) => {
        if (event.target === forumModal) {
            forumModal.style.display = "none";
        }
    });

    renderForums();
});
