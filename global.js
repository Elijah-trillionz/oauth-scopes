const menuHamburger = document.querySelector('.menu-hamburger');
const nav = document.querySelector('nav');
const bodyContainer = document.querySelector('.body-container');

function openSideNav() {
  nav.classList.add('active');
  bodyContainer.classList.add('active');
}

function closeSideNav() {
  nav.classList.remove('active');
  bodyContainer.classList.remove('active');
}

menuHamburger.addEventListener('click', openSideNav);
bodyContainer.addEventListener('click', closeSideNav);
