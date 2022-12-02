document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allnNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");
	const logo = document.querySelector(".navbar-brand");
	const burgerIcon = document.querySelector(".animated-icon2");
	const burgerBtn = document.querySelector(".second-button");
	const navArea = document.querySelector(".navbar-nav");
	const fabBtn = document.querySelector(".floating-button");
	const fabContainer = document.querySelector(".floating-container");
	const elementContainer = document.querySelector(".element-container");
	const element1 = document.querySelector('.float-element1')
	const element2 = document.querySelector('.float-element2')
	const element3 = document.querySelector('.float-element3')
	const cross = document.querySelector('.cross')
	const cardIcons = document.querySelectorAll('.about i')
	const cards = document.querySelectorAll('.about__card')
	
	
	window.addEventListener("click", (e) =>{
		if(window.innerWidth <= 768)
		{
			for(i=0; i<cards.length; i++){
				if(cards[i]==e.target && cardIcons[i].classList.contains('icon-animation')==true && i!=cards.length-1)
				{
					cardIcons[i].classList.remove('icon-animation')
					cardIcons[i+1].classList.add('icon-animation')
				}
				else if(cards[i]==e.target && cardIcons[i].classList.contains('icon-animation')==true && i==cards.length-1){
					cardIcons[i].classList.remove('icon-animation')
				}
			}
		}
	}
		
	);
	
	function addShadow() {
		if(window.location.pathname == '/index.html'){
			if (window.scrollY >= 400 && window.innerWidth >= 992) {
				nav.classList.add("shadow-bg");
				logo.style.fontSize = "0.9rem";
			} else {
				nav.classList.remove("shadow-bg");
				logo.style.fontSize = "";
			}
		}
		else{
			if (window.scrollY >= 50 && window.innerWidth >= 992) {
				nav.classList.add("shadow-bg");
				logo.style.fontSize = "0.9rem";
			} else {
				nav.classList.remove("shadow-bg");
				logo.style.fontSize = "";
			}
		}
		
	}

	function showFab(){
		if (window.scrollY >= 400 ) {
			fabContainer.classList.add('fab-position')
		} else {
			fabContainer.classList.remove('fab-position')
		}
	}

	
	const hideFabs = () => {
		elementContainer.classList.remove('visible')
	}

	const startAnimation = () => {
		
		fabBtn.classList.toggle('fab-click')
		cross.classList.toggle('cross-rotate')
		
		if(fabBtn.classList.contains('fab-click')==true)
		{
			
			fabContainer.style.height = '250px'
			elementContainer.classList.add('visible')
			element1.classList.add('come-in1')
			element2.classList.add('come-in2')
			element3.classList.add('come-in3')
			element1.classList.remove('come-out1')
			element2.classList.remove('come-out2')
			element3.classList.remove('come-out3')
			
			
		}
		else if(fabBtn.classList.contains('fab-click')==false)
		{
			
			
			element1.classList.add('come-out1')
			element2.classList.add('come-out2')
			element3.classList.add('come-out3')
			element1.classList.remove('come-in1')
			element2.classList.remove('come-in2')
			element3.classList.remove('come-in3')
			setTimeout(hideFabs,800)
			
		}
		
	};
	

	const navOff = () => {
		navList.classList.remove("show");
		burgerIcon.classList.remove("open");
		document.querySelector("body").classList.remove("noscroll");
	};

	allnNavItems.forEach((item) => item.addEventListener("click", navOff));

	window.addEventListener("scroll", addShadow);
	window.addEventListener("scroll", showFab);
	window.addEventListener("click", (e) =>
		e.target === navArea ? navOff() : false
	);
	
	burgerBtn.addEventListener("click", () => {
		console.log(burgerBtn);
		if (
			burgerIcon.classList.contains("open") == false &&
			burgerBtn.classList.contains("collapsed") == false
		) {
			burgerIcon.classList.add("open");
			document.querySelector("body").classList.add("noscroll");
		} else if (
			burgerIcon.classList.contains("open") == true &&
			burgerBtn.classList.contains("collapsed") == true
		) {
			burgerIcon.classList.remove("open");
			document.querySelector("body").classList.remove("noscroll");
		}
	});
	
	
	fabBtn.addEventListener("click", startAnimation);
	

	
});
