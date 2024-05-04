document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

    if (blogPosts && blogPosts.length > 0) {
        const blogPostsContainer = document.getElementById('blog-posts');
        
        blogPosts.forEach(post => {
            const postElement = createPostElement(post);
            blogPostsContainer.appendChild(postElement);
        });
    }
});

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const title = document.createElement('h2');
    title.textContent = post.title;

    const username = document.createElement('p');
    username.textContent = `By: ${post.username}`;

    const content = document.createElement('p');
    content.textContent = post.content;

    postDiv.appendChild(title);
    postDiv.appendChild(username);
    postDiv.appendChild(content);

    return postDiv;
}


