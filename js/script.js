document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allnNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");
	const logo = document.querySelector(".navbar-brand");
	const burgerIcon = document.querySelector(".animated-icon2")
	const burgerBtn = document.querySelector(".second-button")

	function addShadow() {
		if (window.scrollY >= 50 && window.innerWidth >= 992) {
			nav.classList.add("shadow-bg");
			logo.style.fontSize = "0.9rem";
		} else {
			nav.classList.remove("shadow-bg");
			logo.style.fontSize = "";
		}
	}

	const navOff = () => {
		navList.classList.remove("show");
		burgerIcon.classList.remove("open");
	}

	allnNavItems.forEach((item) =>
		item.addEventListener("click", navOff)
	);

	window.addEventListener("scroll", addShadow);

	
		burgerBtn.addEventListener("click", () => {
			console.log(burgerBtn)
			if(burgerIcon.classList.contains('open')==false && burgerBtn.classList.contains('collapsed')==false){
				burgerIcon.classList.add("open");
			}
			else if (burgerIcon.classList.contains('open')==true && burgerBtn.classList.contains('collapsed')==true){
				burgerIcon.classList.remove("open");
			}
		});
});
