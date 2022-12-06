const hamburgerMenu = document.querySelector('.hamburger-menu')
const bars = document.querySelector('.bars')
const navLinks = document.querySelector('.nav-links')

hamburgerMenu.addEventListener('click', () =>{
    navLinks.classList.toggle('active')
})


function rotate(x) {
    x.classList.toggle('change')
}