
const header = document.querySelector('.header');
const btnHamburger = document.querySelector('#btnHamburger');
const headerSideNav = document.querySelector('.header__side_nav');
const hero = document.querySelector('.hero');
const body = document.querySelector('body');

const about = document.querySelector('.s_about');



btnHamburger.addEventListener('click', () => {
  if (header.classList.contains('open-menu')) {
    header.classList.remove('open-menu');
    body.classList.remove('no-scroll');
    headerSideNav.classList.add('d-none');
    headerSideNav.classList.add('side-fade-out');
    headerSideNav.classList.remove('side-fade-in');
    hero.classList.remove('opacity');
  } else {
    header.classList.add('open-menu');
    body.classList.add('no-scroll');
    headerSideNav.classList.remove('d-none');
    headerSideNav.classList.remove('side-fade-out');
    headerSideNav.classList.add('side-fade-in');
    hero.classList.add('opacity');
  }

});

about.addEventListener('click', () => {
  if (body.classList.contains('no-scroll')) {
    body.classList.remove('no-scroll');
    header.classList.remove('open-menu');
  }

  console.log(header);
})

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("r-active");
    } else {
      reveals[i].classList.remove("r-active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
//carousel


reveal();