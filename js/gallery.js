const gallery = document.querySelectorAll(".gallery img");
const fullImg = document.querySelector(".full-img");
const fullImgBox = document.querySelector(".full-img-box");
const nav = document.querySelector('nav')
const closeImgBtn = document.querySelector('.closeFullImg')
const description = document.querySelector('.image-description')

const showPicture = (e) => {
	let imgPath = e.target.getAttribute("src");
    let imgDescription = e.target.getAttribute('alt');
	fullImg.setAttribute("src", imgPath);
    if(imgDescription!=null){
        description.textContent = imgDescription
    }
    nav.style.display = "none";
    fullImgBox.style.display = "flex";

};

const closeImg = () => {
    nav.style.display = "block";
    fullImgBox.style.display = "none";
}

gallery.forEach((item) => item.addEventListener("click", showPicture));
closeImgBtn.addEventListener('click',closeImg)