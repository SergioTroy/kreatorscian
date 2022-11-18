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
	let uploadField = document.getElementById("file");
	let uploadField1 
	let uploadField2 
	let uploadFieldX
	const newsubmission = document.getElementById('newsubmission')
	const name = document.getElementById('name')
	const addBtn = document.querySelector('.add-more')
	const files = document.querySelector('.files')
	let number = 1;
	

	const addField = () => {
		
		let fileName = 'input' + number
		if(number<3)
		{
			let newField = document.createElement('div')
			newField.setAttribute('class','input-group')
			let newInput = document.createElement('input')
			newInput.setAttribute('type','file')
			newInput.setAttribute('name',fileName)
			newInput.setAttribute('accept','image/*')
			newInput.setAttribute('id',fileName)
			newField.appendChild(newInput)
			files.appendChild(newField)
			uploadFieldX = document.getElementById(fileName);
			uploadFieldX.addEventListener('change',checkFile)
			number++;
		}
		if(number==3){
			addBtn.setAttribute('disabled','')
			
		}
		
	}

	const checkFile = (e) => {
		if(e.target.files[0].size > 4097152){
			alert("Plik jest za duży! Maksymalny rozmiar obrazu to 2MB\nProsimy o przesłanie pliku bezpośrednio na nasz adres mailowy :)");
			e.target.value = "";
		 };
		
	}
	
	
	function addShadow() {
		if (window.scrollY >= 50 && window.innerWidth >= 992) {
			nav.classList.add("shadow-bg");
			logo.style.fontSize = "0.9rem";
		} else {
			nav.classList.remove("shadow-bg");
			logo.style.fontSize = "";
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
	uploadField.addEventListener('change',checkFile)
	
	name.addEventListener("blur", function() {
		newsubmission.value = newsubmission.value + name.value
		console.log(newsubmission.value)
	  });
	addBtn.addEventListener('click',addField)

	
});
