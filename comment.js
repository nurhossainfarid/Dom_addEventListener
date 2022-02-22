document.getElementById("post-button").addEventListener('click', function () {
    const commentText = document.getElementById("comment-your-text");
    // create a paragraph for comment 
    const newComment = document.createElement('p');
    newComment.innerText = commentText.value;
    commentText.value = '';
    // appendChild in parents
    const parents = document.getElementById("section");
    parents.appendChild(newComment);
})