const header = document.querySelector('.header');
const btnHamburger = document.querySelector('#btnHamburger');
const headerSideNav = document.querySelector('.header__side_nav');
const hero = document.querySelector('.hero');


btnHamburger.addEventListener('click', ()=>{
    if(header.classList.contains('open-menu')){
        header.classList.remove('open-menu');
        headerSideNav.classList.add('d-none');
        headerSideNav.classList.add('side-fade-out');
        headerSideNav.classList.remove('side-fade-in');
        hero.classList.remove('opacity');
    } else {
        header.classList.add('open-menu');
        headerSideNav.classList.remove('d-none');
        headerSideNav.classList.remove('side-fade-out');
        headerSideNav.classList.add('side-fade-in');
        hero.classList.add('opacity');
    }
})