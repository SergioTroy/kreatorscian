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
    if(window.scrollY<=215){
        leftTitle.style.left = (window.scrollY *2.2) + "px"; 
        console.log(window.scrollY)
        rightTitle.style.left = '-' + (window.scrollY *2.5) + "px"; 
    }
    

if(window.scrollY){
    images[1].style.zIndex = 1;
}
else{
    images[1].style.zIndex = 6; 
}


//    images[2].style.top = '-' + (window.scrollY / 2.5) + "px"; 
//    images[3].style.top = '-' + (window.scrollY / 2.5) + "px"; 
//    images[2].style.left = (window.scrollY / 2) + "px"; 
//    images[3].style.left = '-' + (window.scrollY / 2) + "px"; 
   
})