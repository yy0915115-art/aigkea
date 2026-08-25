document.addEventListener('DOMContentLoaded', () => {
    // 1. 愛心點擊按讚/取消功能
    const likeBtn = document.getElementById('like-btn');
    const likesText = document.getElementById('likes-text');
    let isLiked = false;
    let currentLikes = 1482;

    likeBtn.addEventListener('click', () => {
        isLiked = !isLiked;
        if (isLiked) {
            currentLikes++;
            likeBtn.textContent = '❤️';
        } else {
            currentLikes--;
            likeBtn.textContent = '🤍';
        }
        likesText.textContent = `${currentLikes.toLocaleString()} 次讚`;
    });

    // 2. 留言區發布功能
    const commentInput = document.getElementById('comment-input');
    const submitCommentBtn = document.getElementById('submit-comment');
    const commentsList = document.getElementById('comments-list');

    function addComment() {
        const text = commentInput.value.trim();
        if (text !== "") {
            const commentItem = document.createElement('div');
            commentItem.className = 'comment-item';
            
            // 隨機帶入訪客帳號名稱
            commentItem.innerHTML = `<span class="comment-user">guest_${Math.floor(Math.random()*899+100)}</span> <span>${text}</span>`;
            
            commentsList.appendChild(commentItem);
            commentInput.value = '';
        }
    }

    submitCommentBtn.addEventListener('click', addComment);

    // 支援按下 Enter 發布留言
    commentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addComment();
        }
    });
});