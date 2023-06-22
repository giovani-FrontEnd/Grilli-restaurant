// open & close nav list mobile 
let navMobile = document.querySelector('.nav-mobile')
let hamburger = document.querySelector('.hamburger');
let closeIcon = document.querySelector('.close-icon');
let overlay = document.querySelector('.overlay');

hamburger.onclick = () => {
    navMobile.classList.add('active');
    overlay.classList.add('active');
}
closeIcon.onclick = () => {
    navMobile.classList.remove('active');
    overlay.classList.remove('active');
}

// navList
let navList = document.querySelectorAll('header ul li a');
navList.forEach(list => {
  list.onclick = (e) => {
    navList.forEach(ele => {
      ele.classList.remove('active');
    });
    e.target.classList.add('active');
  }
})


// listMobile
let listMobile = document.querySelectorAll('.nav-mobile ul li');

listMobile.forEach(list => {
  list.onclick = (e) => {
    navMobile.classList.remove('active');
    overlay.classList.remove('active');
    listMobile.forEach(ele => {
      ele.classList.remove('active');
    });
    e.target.classList.add('active');
  }
})

document.onkeyup = function (e) {
  if(e.key === 'Escape') {
    navMobile.classList.remove('active');
    overlay.classList.remove('active');
  }
}

const slides = document.querySelectorAll('.slide');
const prevIcon = document.querySelector('.arrow-left');
const nextIcon = document.querySelector('.arrow-right');
let currentIndex = 0;

// let titlesHeader = ['For the love of delicious food', 'Where every flavor tells a story', 'Flavors Inspired by the Seasons']
// let titleSectionHeader = document.querySelector("header .content-header .title-section h2");
// let titleHeader = document.querySelector("header .content-header .title");

// Function to show the slide at the specified index
function showSlide(index) {
  // Remove the active class from all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
  }

prevIcon.addEventListener('click', prevSlide);
nextIcon.addEventListener('click', nextSlide);

// Set the initial slide
showSlide(currentIndex);

// Automatically switch to the next slide every 3 seconds
setInterval(nextSlide, 6000);


// scroll top 
let scrollTop = document.querySelector('.scroll-top');
let navbar = document.querySelector('header nav');

document.onscroll = function () {
    if(window.scrollY > 50) {
        scrollTop.classList.add('active');
        navbar.classList.add('active');
    } else{
        scrollTop.classList.remove('active');
        navbar.classList.remove('active');
    }
}

scrollTop.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

let aboutSection = document.querySelector('.about');
let aboutbannerImg = document.querySelector('.about-banner');
let aboutAbsbannerImg = document.querySelector('.about-abs-banner');

aboutSection.onmousemove = function (e) {
    let x = (e.clientX * -1 / 70);
    let y = (e.clientY * -1 / 70);
    aboutbannerImg.style.transform = `translate(${x}px, ${y}px)`;
    aboutAbsbannerImg.style.transform = `translate(${x}px, ${y}px)`;
}

// loadingPage 


document.addEventListener("DOMContentLoaded", function(event) {
  let loading = document.querySelector('.loading');

  // Show the loading screen
  loading.style.display = "flex";

  // Wait for 3 seconds (3000 milliseconds)
  setTimeout(function() {
    // Hide the loading screen after 3 seconds
    loading.style.top = '100%'
  }, 2000);
});