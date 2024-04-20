function search() {
  const selectedService = document.getElementById('serviceSelect').value;
  const filteredPosts = posts.filter(post => post.service === selectedService);

  displayFilteredPosts(filteredPosts);
}

function displayFilteredPosts(filteredPosts) {
  const postsContainer = document.getElementById('postsContainer');
  postsContainer.innerHTML = '';

  filteredPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
      <p>${post.message}</p>
      <ul>
        ${post.responses.map(response => `<li>${response.response}</li>`).join('')}
      </ul>
      <input type="text" placeholder="Reply..." onkeyup="if(event.keyCode===13) {
        const postId = ${post.id};
        const response = this.value;
        postResponse(postId, response);
      }">
    `;
    postsContainer.appendChild(postElement);

    postElement.innerHTML = postElement.innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  });
}
let comments = [];

function postComment(comment) {
  const commentText = document.getElementById('commentInput').value.trim();
  if (commentText !== '') {
    comments.push(commentText);
    displayComments();
    document.getElementById('commentInput').value = ''; // Clear the input field after posting
  }
}

function displayComments() {
  const commentsContainer = document.getElementById('commentsContainer');
  commentsContainer.innerHTML = '';

  comments.slice().reverse().forEach(comment => { // Reverse the order of comments
    const commentElement = document.createElement('div');
    commentElement.textContent = comment;
    commentElement.style.border='1px solid black';
    commentsContainer.appendChild(commentElement);
  });
}    console.log(commentElement)