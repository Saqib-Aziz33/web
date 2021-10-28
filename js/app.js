//navbar logic
const navToggler = document.querySelector('.nav-toggler')
const showNav = document.querySelector('.my-nav-links')
const portfolioNavigationBtn = document.querySelector('.portfolio-navigation-btn')

navToggler.addEventListener('click', () => {
    showNav.classList.toggle('active')
    portfolioNavigationBtn.classList.toggle('in-active')
})


const navbar = document.querySelector('header')
window.addEventListener(`scroll`, () => {
    if(window.pageYOffset > 500){
        navbar.classList.add(`active`);
    }
    else{
        navbar.classList.remove(`active`);
    }
})



//dark theme logic

//theme btn name
const btn = document.getElementById('dark-theme-toggler')
const themeMsg = document.getElementById('theme-msg')
//class name
const darkTheme = 'dark-theme'
const selectedTheme = localStorage.getItem('selected-theme')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}
btn.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
})



//typed.js
var options = {
    strings: [
        ``,
        `I'm a Front end <span class="clr-primary">Web Developer</span>.`,
        `I'm a Full stack <span class="clr-primary">Javascript Developer.</span>`,
        `I'm a <span class="clr-primary">Photographer.</span>`
    ],
    typeSpeed: 100,
    loop: true
};
  
var typed = new Typed('.element', options);



//portfolio
const frontend = document.getElementById('frontend')
const backend = document.getElementById('backend')
const front = document.getElementById('front')
const back = document.getElementById('back')

front.addEventListener('click', () => {
    backend.style.display = 'none'
    frontend.style.display = 'block'
    front.classList.add('active')
    back.classList.remove('active')
})
back.addEventListener('click', () => {
    frontend.style.display = 'none'
    backend.style.display = 'block'
    front.classList.remove('active')
    back.classList.add('active')
})




//animate on scroll
AOS.init({
    duration: 2000
});