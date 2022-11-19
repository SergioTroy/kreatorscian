const gallery = document.querySelectorAll(".gallery img");
const fullImg = document.querySelector(".full-img");
const fullImgBox = document.querySelector(".full-img-box");
const nav = document.querySelector('nav')
const closeImgBtn = document.querySelector('.closeFullImg')

const showPicture = (e) => {
	let imgPath = e.target.getAttribute("src");
	fullImg.setAttribute("src", imgPath);
    nav.style.display = "none";
    fullImgBox.style.display = "flex";

};

const closeImg = () => {
    nav.style.display = "block";
    fullImgBox.style.display = "none";
}

gallery.forEach((item) => item.addEventListener("click", showPicture));
closeImgBtn.addEventListener('click',closeImg)