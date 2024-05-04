document.addEventListener('DOMContentLoaded', function() {
    const post = JSON.parse(localStorage.getItem('post'));

    if (post) {
        const blogPosts = document.getElementById('blog-posts');
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>By: ${post.username}</p>
        `;
        blogPosts.appendChild(postElement);
    }
});

document.getElementById('themeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});
