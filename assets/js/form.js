const inputs = document.querySelector('.inputs');
let username = document.getElementById('username');
let title = document.getElementById('title');
let blog = document.getElementById('blog');
let submit = document.getElementById('submit');

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

 submit.addEventListener('click',function (event) {
         let blogPost = {
             username: username.value,
             title: title.value,
             blog: blog.value.trim(),
         };
         localStorage.setItem('blogPost',JSON.stringify(blogPost));
        //  stored data to local storage.
        // change location of the page to blog.html using window.location.pathname
     });
     