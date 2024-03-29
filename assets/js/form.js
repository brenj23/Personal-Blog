const inputs = document.querySelector('.inputs');
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submit = document.getElementById('submit');

const switchCol = document.querySelector('.theme-switcher')
document.querySelector('.circle-dark').style.display="none"
let mode = 'light';

switchCol.addEventListener('click', function(event){
    const checked = event.target.dataset.color;
    
    if (checked==="light"){
        document.querySelector('.circle-light').style.display="none";
        document.querySelector('.circle-dark').style.display="block";
        event.target.dataset.color="dark";
    } else {
        document.querySelector('.circle-dark').style.display="none";
        document.querySelector('.circle-light').style.display="block";
        event.target.dataset.color="light"; 
 }

})

 submit.addEventListener('click',(event) => {
    const listBlog = [];
         const blogPost = {
             username: username.value,
             title: title.value,
             content: content.value.trim(),
         }
         listBlog.push(blogPost)
         console.log(event.target.value)
         localStorage.setItem('blogPost',JSON.stringify(listBlog))
         window.location="blog.html"
        //  stored data to local storage.
        // change location of the page to blog.html using window.location.pathname
     })
     