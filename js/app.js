/* typed */
var typed = new Typed('.element', {
    strings: 
    [
        '',
        'am a Front End Web Developer.',
        'love every thing about code.',
        'am learning full stack Development.',
        'am a Freelancer.',
        'am a Developer'
        
    ],
    smartBackspace: true, // Default value
    loop: false,
    //loopCount: Infinity,
    typeSpeed: 20
});


/* animate on scroll */
AOS.init();


/* footer year */
const yearDiv = document.getElementById(`year`);
const date = new Date();

yearDiv.innerText = date.getFullYear();