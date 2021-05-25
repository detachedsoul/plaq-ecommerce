let navToggle   =   document.querySelector('.nav-toggle-btn');
let navContent  =   document.querySelector('.nav-content');
let navLinks = document.querySelectorAll('.nav-links');

let searchToggleBtn     =   document.querySelector('.search-toggle');
let searchContent       =   document.querySelector('.search-container');

let toTopBtn = document.querySelector('.to-top');

window.onscroll = () => {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        toTopBtn.classList.add('show-to-top');
    } else {
        toTopBtn.classList.remove('show-to-top');
    }
};

searchToggleBtn.addEventListener('click', () => {
    searchContent.classList.toggle('show-search-container');
});

navToggle.addEventListener('click', () => {
    navContent.classList.toggle('nav-content-show');
    navToggle.classList.toggle('nav-toggle-close');
});

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navContent.classList.remove('nav-content-show');
        navToggle.classList.remove('nav-toggle-close');
    });
});

toTopBtn.addEventListener('click', () => {
    scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth'
    });
});