let navbar = document.querySelector('nav');

addEventListener('scroll', () => {
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-list');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-list a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));