document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("postButton").addEventListener("click", handlePost);
});

function handlePost() {
    const postInput = document.getElementById("postInput");
    const postText = postInput.value.trim();
    if (postText !== "") {
        createPost("Você", postText);
        postInput.value = "";
    } else {
        alert("Por favor, insira uma mensagem.");
    }
}

function createPost(author, content) {
    const postList = document.getElementById("postList");
    const newPost = document.createElement("div");
    newPost.classList.add("post");
    
    const postText = document.createElement("p");
    postText.innerHTML = `<strong>${author}:</strong> ${content}`;
    
    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.textContent = " ❤️";
    likeButton.addEventListener("click", function() {
        createHeartAnimation(newPost);
    });
    
    const commentButton = document.createElement("button");
    commentButton.classList.add("comment-button");
    commentButton.textContent = " 💬";
    commentButton.addEventListener("click", function() {
        commentPost(newPost);
    });
    
    const commentsDiv = document.createElement("div");
    commentsDiv.classList.add("comments");
    
    newPost.appendChild(postText);
    newPost.appendChild(likeButton);
    newPost.appendChild(commentButton);
    newPost.appendChild(commentsDiv);
    
    postList.prepend(newPost);
}

function commentPost(postElement) {
    let comment = prompt("Digite seu comentário:");
    if (comment) {
        let commentsDiv = postElement.querySelector(".comments");
        let newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `${comment}`;
        
        const likeCommentButton = document.createElement("button");
        likeCommentButton.classList.add("like-button");
        likeCommentButton.textContent = "❤️";
        likeCommentButton.addEventListener("click", function() {
            createHeartAnimation(newComment);
        });
        
        newComment.appendChild(likeCommentButton);
        commentsDiv.appendChild(newComment);
    }
}

function createHeartAnimation(postElement) {
    const heart = document.createElement("div");
    heart.classList.add("heart-animation");
    heart.innerHTML = "❤️";
    postElement.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = "translateY(-120px) scale(1.8)";
        heart.style.opacity = "1";
    }, 50);
    
    setTimeout(() => {
        heart.style.opacity = "0.8";
    }, 1500);
    
    setTimeout(() => {
        heart.style.opacity = "0.5";
    }, 2500);
    
    setTimeout(() => {
        heart.style.opacity = "0";
        heart.remove();
    }, 3500);
}

function openChat(user) {
    alert(`Abrindo chat com ${user}...`);
}