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
    if(window.scrollY<=800){
        leftTitle.style.left = (window.scrollY *1.5) + "px"; 
        rightTitle.style.left = '-' + (window.scrollY *1.3) + "px"; 
    }
    
if(window.innerWidth >= 992){
    if(window.scrollY){
        images[1].style.zIndex = 2;
    }
    else{
        images[1].style.zIndex = 7; 
    }
    if(window.scrollY>=50){
        images[1].style.zIndex = 1;
    }
    else{
        images[1].style.zIndex = 7; 
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




//    images[2].style.top = '-' + (window.scrollY / 2.5) + "px"; 
//    images[3].style.top = '-' + (window.scrollY / 2.5) + "px"; 
//    images[2].style.left = (window.scrollY / 2) + "px"; 
//    images[3].style.left = '-' + (window.scrollY / 2) + "px"; 
   
})