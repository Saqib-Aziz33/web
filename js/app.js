//navbar logic
const navToggler = document.querySelector('.nav-toggler')
const navTogglerClose = document.querySelector('.nav-toggler-close')
const showNav = document.querySelector('.my-nav-links')
const portfolioNavigationBtn = document.querySelector('.portfolio-navigation-btn')
const mainBody = document.getElementById('main')

navToggler.addEventListener('click', () => {
    showNav.classList.add('active')
    portfolioNavigationBtn.classList.add('in-active')
    mainBody.classList.add('blur')
    navToggler.classList.add('de-active')
    navTogglerClose.classList.add('active')
})
navTogglerClose.addEventListener('click', () => {
    showNav.classList.remove('active')
    portfolioNavigationBtn.classList.remove('in-active')
    mainBody.classList.remove('blur')
    navToggler.classList.remove('de-active')
    navTogglerClose.classList.remove('active')
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