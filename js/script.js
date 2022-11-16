document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allnNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");
	const logo = document.querySelector(".navbar-brand");
	const burgerIcon = document.querySelector(".animated-icon2")
	const burgerBtn = document.querySelector(".second-button")
	const navArea = document.querySelector('.navbar-nav')
	const fabBtn = document.querySelector('.floating-button')
	const floatElement1 = document.querySelector('.float-element1')
	const floatElement2 = document.querySelector('.float-element2')
	const floatElement3 = document.querySelector('.float-element3')

	function addShadow() {
		if (window.scrollY >= 50 && window.innerWidth >= 992) {
			nav.classList.add("shadow-bg");
			logo.style.fontSize = "0.9rem";
		} else {
			nav.classList.remove("shadow-bg");
			logo.style.fontSize = "";
		}
	}
	
	const toggleBtn = () => {
		floatElement1.classList.toggle('animation1')
		floatElement2.classList.toggle('animation2')
		floatElement3.classList.toggle('animation3')
		console.log("yess")
	}
	const navOff = () => {
		navList.classList.remove("show");
		burgerIcon.classList.remove("open");
		document.querySelector('body').classList.remove('noscroll')
	}

	allnNavItems.forEach((item) =>
		item.addEventListener("click", navOff)
	);

	window.addEventListener("scroll", addShadow);
	window.addEventListener("click", (e) =>
	e.target === navArea ? navOff() : false
);
	
		burgerBtn.addEventListener("click", () => {
			
			console.log(burgerBtn)
			if(burgerIcon.classList.contains('open')==false && burgerBtn.classList.contains('collapsed')==false){
				burgerIcon.classList.add("open");
				document.querySelector('body').classList.add('noscroll')
			}
			else if (burgerIcon.classList.contains('open')==true && burgerBtn.classList.contains('collapsed')==true){
				burgerIcon.classList.remove("open");
				document.querySelector('body').classList.remove('noscroll')
			}
		});

	fabBtn.addEventListener('click',toggleBtn)
});
