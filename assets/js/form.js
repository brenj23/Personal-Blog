document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        alert('Please complete all fields');
        return;
    }

    // Retrieve existing blog posts from local storage or initialize an empty array
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Create a new post object
    const post = { username, title, content };

    // Add the new post to the array
    blogPosts.push(post);

    // Save the updated array back to local storage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Clear the form fields if needed
    // document.getElementById('username').value = '';
    // document.getElementById('title').value = '';
    // document.getElementById('content').value = '';

    // Redirect to the blog page
    window.location.href = 'blog.html';
});
