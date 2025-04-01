window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})

// menu-toggling logic
const toggleButton = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
  menu.classList.toggle('active');
  toggleButton.classList.toggle('active');
}

// Event listeners
toggleButton.addEventListener('click', toggleMenu);

// Close menu when clicking links (mobile)
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      toggleMenu();
    }
  });
});


// Close menu on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('active')) {
    toggleMenu();
  }
});

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

