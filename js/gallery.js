const gallery = document.querySelectorAll(".gallery img");
const fullImg = document.querySelector(".full-img");
const fullImgBox = document.querySelector(".full-img-box");
const nav = document.querySelector("nav");
const closeImgBtn = document.querySelector(".closeFullImg");

let imgPath = "";
let imgDescription = "";
const carouselItem = document.querySelectorAll('.carousel-item')
const carouselImg = document.querySelectorAll('.carousel-inner img')

console.log(carouselItem)
console.log(carouselImg)


const showPicture = (e) => {

	carouselItem.forEach((item) => item.classList.remove('active'));
	carouselImg.forEach((img) => img.classList.remove('full-img'));


	imgPath = e.target.getAttribute("src");

	for(i=0; i<carouselImg.length; i++){
		if(imgPath==carouselImg[i].getAttribute('src')){
			carouselImg[i].classList.add('full-img')
			carouselImg[i].parentElement.classList.add('active')
		}
	}
	
	nav.style.display = "none";
	fullImgBox.style.display = "flex";
	
};

const closeImg = () => {
	nav.style.display = "block";
	fullImgBox.style.display = "none";
};



gallery.forEach((item) => item.addEventListener("click", showPicture));
closeImgBtn.addEventListener("click", closeImg);

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
	  closeImg()
	}
  })
window.addEventListener("click", (e) =>

		e.target.tagName === 'DIV' ? closeImg() : false
	);
