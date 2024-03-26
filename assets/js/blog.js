// use window.onload function 
// get data from local storage
// loop through array of objects
// manipulate blog.html document display blogs 


    console.log("blog.js");
    let retrieveData
    retrieveData=JSON.stringify(localStorage.getItem('blogPost'));
    console.log(retrieveData)