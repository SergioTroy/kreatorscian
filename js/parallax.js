const images = document.querySelectorAll('.images img')

window.addEventListener('scroll', ()=>{
   images[0].style.top = '-' + (window.scrollY / 2.5) + "px"; 
   images[1].style.top = '-' + (window.scrollY / 3.5) + "px"; 
   images[2].style.top = '-' + (window.scrollY / 4) + "px"; 
})