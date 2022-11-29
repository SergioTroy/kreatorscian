const images = document.querySelectorAll('.images img')
const title  = document.querySelector('.title')

window.addEventListener('scroll', ()=>{
    title.style.left = (60 - window.scrollY/10) + "%"; 
if(window.scrollY >= 20){
    images[1].style.zIndex = 1;
}
else{
    images[1].style.zIndex = 2; 
}
//    images[2].style.top = '-' + (window.scrollY / 2.5) + "px"; 
//    images[3].style.top = '-' + (window.scrollY / 2.5) + "px"; 
//    images[2].style.left = (window.scrollY / 2) + "px"; 
//    images[3].style.left = '-' + (window.scrollY / 2) + "px"; 
   
})