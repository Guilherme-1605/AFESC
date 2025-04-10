const postButton = document.getElementById('postButton');
const postInput = document.getElementById('postInput');
const postList = document.getElementById('postList');

postButton.addEventListener('click', () => {
    const text = postInput.value.trim();
    if (text === '') return;

    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <p><strong>Você:</strong> ${text}</p>
        <button class="like-btn">Curtir (<span class="like-count">0</span>)</button>
        <button class="toggle-comments-btn">Comentários</button>

        <div class="comments-section" style="display: none;">
            <input type="text" class="comment-input" placeholder="Escreva um comentário">
            <button class="comment-btn">Comentar</button>
            <div class="comments-list"></div>
        </div>
    `;

    postList.prepend(post);
    postInput.value = '';

    addPostEvents(post);
});

function addPostEvents(post) {
    const likeBtn = post.querySelector('.like-btn');
    const likeCount = post.querySelector('.like-count');
    const toggleCommentsBtn = post.querySelector('.toggle-comments-btn');
    const commentsSection = post.querySelector('.comments-section');
    const commentBtn = post.querySelector('.comment-btn');
    const commentInput = post.querySelector('.comment-input');
    const commentsList = post.querySelector('.comments-list');

    likeBtn.addEventListener('click', () => {
        let count = parseInt(likeCount.textContent);
        likeCount.textContent = count + 1;
    });

    toggleCommentsBtn.addEventListener('click', () => {
        commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
    });

    commentBtn.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (commentText === '') return;

        const comment = document.createElement('p');
        comment.textContent = commentText;
        commentsList.appendChild(comment);
        commentInput.value = '';
    });
}

// Ativar eventos nos posts iniciais
document.querySelectorAll('.post').forEach(addPostEvents);
