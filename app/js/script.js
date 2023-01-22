const btn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu__list')
const overlay = document.querySelector('.header__overlay')
const body = document.querySelector('body')



btn.addEventListener( 'click', function() {
menu.classList.toggle('show')
btn.classList.toggle('show')
overlay.classList.toggle('show')
body.classList.toggle('stop-scroll')
})

overlay.addEventListener( 'click', function() {
menu.classList.remove('show')
btn.classList.remove('show')
overlay.classList.remove('show')
body.classList.remove('stop-scroll')
})

