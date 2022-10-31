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
