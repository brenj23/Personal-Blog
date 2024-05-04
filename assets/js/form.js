document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        alert('Please complete all fields');
        return;
    }

    const post = { username, title, content };
    localStorage.setItem('post', JSON.stringify(post));

    window.location.href = 'blog.html';
});
