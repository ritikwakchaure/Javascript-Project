document.addEventListener('DOMContentLoaded', function() {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    const mainVideo = document.getElementById('main-video');

    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            mainVideo.querySelector('source').setAttribute('src', videoSrc);
            mainVideo.load();
            mainVideo.play();
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    const mainVideo = document.getElementById('main-video');
    const commentsList = document.querySelector('.comments-list');
    const commentInput = document.getElementById('comment-input');
    const postCommentBtn = document.getElementById('post-comment-btn');

    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            mainVideo.querySelector('source').setAttribute('src', videoSrc);
            mainVideo.load();
            mainVideo.play();
        });
    });

    postCommentBtn.addEventListener('click', function() {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentDiv = document.createElement('div');
            commentDiv.textContent = commentText;
            commentsList.appendChild(commentDiv);
            commentInput.value = '';
        }
    });

    // Placeholder for authentication logic
    document.getElementById('login-btn').addEventListener('click', function() {
        alert('Login functionality not implemented.');
    });

    document.getElementById('signup-btn').addEventListener('click', function() {
        alert('Sign Up functionality not implemented.');
    });
});
