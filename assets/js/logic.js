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


