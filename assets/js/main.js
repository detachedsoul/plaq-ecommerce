let preloader = document.querySelector('.preloader-container');
window.onload = () => {

    setTimeout(() => {
        preloader.classList.add('hide-preloader');
    }, 1000);

};


let toTopBtn    = document.querySelector('.to-top');
window.onscroll = () => {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        toTopBtn.classList.add('show-to-top');
    } else {
        toTopBtn.classList.remove('show-to-top');
    }
};
toTopBtn.addEventListener('click', () => {
    scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth'
    });
});


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



let container               = document.querySelectorAll('.what-you-like-grid');
let totalHorizontalSlide    = document.querySelectorAll('.what-you-like-card').length;
let counter = 1;

let scrollRightBtns = document.querySelectorAll('.what-you-like-btn.right');
scrollRightBtns.forEach(scrollRightBtn => {
    scrollRightBtn.addEventListener('click', () => {
        sideScroll(container, 'right', 200);
        console.log(scrollRightBtn.nextElementSibling);
    });
});

let scrollLeftBtns = document.querySelectorAll('.what-you-like-btn.left');
scrollLeftBtns.forEach(scrollLeftBtn => {
    scrollLeftBtn.addEventListener('click', () => {
        sideScroll(container, 'left', 200);
    });
});

function sideScroll (elements, direction, speed) {
    let slideTimer = setTimeout(function () {

        if (direction === 'left') {
            elements.forEach(element => {
                element.scrollLeft -= element.clientWidth;
            });
        } else {
            elements.forEach(element => {
                element.scrollLeft += element.clientWidth;
            });
        }

        window.clearInterval(slideTimer);

    }, speed);
}

function sideScrollAuto (elements, speed) {
    let slideTimer = setInterval(function () {
        elements.forEach(element => {
            element.scrollLeft += element.clientWidth;
        });
    }, speed);
}

sideScrollAuto(container, 8000);