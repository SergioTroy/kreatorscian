document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allnNavItems = document.querySelectorAll('.navbar')
	const navList = document.querySelector('.navbar-collapse')
	const logo = document.querySelector('.navbar-brand')

	function addShadow() {
		if (window.scrollY >= 50 && window.innerWidth >= 992) {
			nav.classList.add('shadow-bg')
			logo.style.fontSize = '0.9rem'
		} else {
			nav.classList.remove('shadow-bg')
			logo.style.fontSize = ''
		}
	}

	allnNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	window.addEventListener('scroll', addShadow)

	document.querySelector('.second-button').addEventListener('click', function () {
		document.querySelector('.animated-icon2').classList.toggle('open')
	})
})

let text = document.getElementsByClassName('text')
let bgc1 = document.getElementsByClassName('bgc1')
let planets1 = document.getElementsByClassName('planets1')
let planets2 = document.getElementsByClassName('planets2')
let rocks = document.getElementsByClassName('rocks')
let comet = document.getElementsByClassName('comet')

window.addEventListener('scroll', function () {
	let value = window.scrollY
	text.style.top = 50 + value * -0.5 + '%'
})
