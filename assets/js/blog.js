// get data from local storage
// loop through array of objects
// manipulate blog.html document display blogs 
const storage=JSON.parse(localStorage.getItem('blogPost')) || []
console.log (storage);
for(let i=0; i<storage.length; i++) {
    const blog=storage[i]
    const container=document.createElement('div')
    container.classList.add('box')
    const title=document.createElement('h2')
    title.classList.add('title')
    title.innerText=blog.title
    container.appendChild(title)
    const content=document.createElement('p')
    title.classList.add('content')
    content.innerText=blog.content
    container.appendChild(content)
    const username =document.createElement('small')
    title.classList.add('username')
    username.innerText=blog.username
    container.appendChild(username)
    document.getElementById('blog').append(container)
};