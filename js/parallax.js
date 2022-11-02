let text = document.getElementsById('text')
let bgc1 = document.getElementsByClassName('bgc1')
let planets1 = document.getElementsByClassName('planets1')
let planets2 = document.getElementsByClassName('planets2')
let rocks = document.getElementsByClassName('rocks')
let comet = document.getElementsByClassName('comet')

window.addEventListener('scroll', function(){
	let value = window.scrollY
	text.style.bottom = 50 + value * -0.5 + '%'
})
