window.onscroll = () => {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        toTopBtn.classList.add('show-to-top');
    } else {
        toTopBtn.classList.remove('show-to-top');
    }
};


let searchToggleBtn     =   document.querySelector('.search-toggle');
let searchContent       =   document.querySelector('.search-container');
searchToggleBtn.addEventListener('click', () => {
    searchContent.classList.toggle('show-search-container');
});


let navToggle   =   document.querySelector('.nav-toggle-btn');
let navContent  =   document.querySelector('.nav-content');
navToggle.addEventListener('click', () => {
    navContent.classList.toggle('nav-content-show');
    navToggle.classList.toggle('nav-toggle-close');
});


let navLinks = document.querySelectorAll('.nav-links');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navContent.classList.remove('nav-content-show');
        navToggle.classList.remove('nav-toggle-close');
    });
});

let toTopBtn = document.querySelector('.to-top');
toTopBtn.addEventListener('click', () => {
    scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth'
    });
});

let container = document.querySelector('.what-you-like-grid');
let totalHorizontalSlide = document.querySelectorAll('.what-you-like-card').length;
let counter = 1;

let scrollRightBtn = document.querySelector('.what-you-like-btn.right');
scrollRightBtn.addEventListener('click', () => {
    sideScroll(container, 'right', 200);
});

let scrollLeftBtn = document.querySelector('.what-you-like-btn.left');
scrollLeftBtn.addEventListener('click', () => {
    sideScroll(container,'left', 200);
});


function sideScroll (element, direction, speed) {
    let slideTimer = setTimeout(function () {

        if (direction === 'left') {
            element.scrollLeft -= element.clientWidth;
        } else {
            element.scrollLeft += element.clientWidth;
        }

        window.clearInterval(slideTimer);

    }, speed);
}

function sideScrollAuto (element, speed) {
    let slideTimer = setInterval(function () {
        element.scrollLeft += element.clientWidth;
    }, speed);
}

sideScrollAuto(container, 8000);