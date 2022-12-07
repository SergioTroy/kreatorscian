const images = document.querySelectorAll('.images img')
const leftTitle  = document.querySelector('.title .left')
const rightTitle  = document.querySelector('.title .right')
const mobileText = document.querySelector('.mobile-text')

function showTitle(){
    if (window.scrollY) {
        mobileText.classList.add('mobile-text-animation')
    } else {
        mobileText.classList.remove('mobile-text-animation')
    }
}
window.addEventListener('scroll', ()=>{

    showTitle();
    
    
if(window.innerWidth >= 992){
    if(window.scrollY){
        images[1].style.zIndex = 3;
    }
    else{
        images[1].style.zIndex = 7; 
    }
    if(window.scrollY>=30){
        images[1].style.zIndex = 1;
    }
}
else{
    if(window.scrollY){
        images[1].style.zIndex = 1;
    }
    else{
        images[1].style.zIndex = 7; 
    } 
}

   
})