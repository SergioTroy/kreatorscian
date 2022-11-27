const gallery = document.querySelectorAll(".gallery img");
const fullImg = document.querySelector(".full-img");
const fullImgBox = document.querySelector(".full-img-box");
const nav = document.querySelector("nav");
const closeImgBtn = document.querySelector(".closeFullImg");
// const description = document.querySelector(".image-description");
// const prevBtn = document.querySelector(".prevBtn");
// const nextBtn = document.querySelector(".nextBtn");
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
	// imgDescription = e.target.getAttribute("alt");
	// fullImg.setAttribute("src", imgPath);
	// if (imgDescription != null) {
	// 	description.textContent = imgDescription;
	// }
	nav.style.display = "none";
	fullImgBox.style.display = "flex";
	
};

const closeImg = () => {
	nav.style.display = "block";
	fullImgBox.style.display = "none";
};

// const nextImg = () => {
// 	for (i = 0; i < gallery.length; i++) {
// 		if (
// 			gallery[i].getAttribute("src") == imgPath &&
// 			gallery[i].getAttribute("alt") == imgDescription
// 		) {
//             if (i == gallery.length-1) {
// 				fullImg.setAttribute("src", gallery[gallery.length-1].getAttribute("src"));
// 				description.textContent = gallery[gallery.length-1].getAttribute("alt");
// 			}
//             else{
//                 fullImg.setAttribute("src", gallery[i + 1].getAttribute("src"));
//                 description.textContent = gallery[i + 1].getAttribute("alt");
//             }
			
// 		}
// 	}
// 	imgPath = fullImg.getAttribute("src");
// 	imgDescription = description.textContent;
// };

// const prevImg = () => {
// 	for (i = 0; i < gallery.length; i++) {
// 		if (
// 			gallery[i].getAttribute("src") == imgPath &&
// 			gallery[i].getAttribute("alt") == imgDescription
// 		) {
// 			if (i == 0) {
// 				fullImg.setAttribute("src", gallery[0].getAttribute("src"));
// 				description.textContent = gallery[0].getAttribute("alt");
// 			} else {
// 				fullImg.setAttribute("src", gallery[i - 1].getAttribute("src"));
// 				description.textContent = gallery[i - 1].getAttribute("alt");
// 			}
// 		}
// 	}
// 	imgPath = fullImg.getAttribute("src");
// 	imgDescription = description.textContent;
// };

gallery.forEach((item) => item.addEventListener("click", showPicture));
closeImgBtn.addEventListener("click", closeImg);
// prevBtn.addEventListener("click", prevImg);
// nextBtn.addEventListener("click", nextImg);
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
	  closeImg()
	}
  })
window.addEventListener("click", (e) =>

		e.target.tagName === 'DIV' ? closeImg() : false
	);
//   document.addEventListener('keydown', (e) => {
// 	if (e.keyCode == '37') {
// 	  prevImg()
// 	}
//   })
//   document.addEventListener('keydown', (e) => {
// 	if (e.keyCode == '39') {
// 	  nextImg()
// 	}
//   })