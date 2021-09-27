/* dark theme */
const themeBtn = document.getElementById(`theme-btn`)
const darkTheme = 'dark-theme'
const selectedTheme = localStorage.getItem('selected-theme')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}
themeBtn.addEventListener(`click`, () => {
    document.body.classList.toggle(darkTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
})



/* typed.js */
var typed = new Typed('.element', {
    strings: ['', 'am a front end web developer', 'am learning backend web development', 'am photoshop expert', 'am a Developer'],
    smartBackspace: true,
    typeSpeed: 25
});


/* footer year */
const yearDiv = document.getElementById(`year`);
const date = new Date();
yearDiv.innerText = date.getFullYear();


/* animate on scroll */
AOS.init({
    offset: 250,
    duration: 800
});