window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})
function toggleMenu() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 750,
    // reset: true for additional animation
});

sr.reveal(` .servicesBx,
            .workBx, .goodsBx,
            .contactInfoBx, .box,
            .textBx, .contentBx,
            .footer__link, .social-list__link`, {
    interval: 200
})

