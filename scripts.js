const menuToggle = document.querySelector('.menu-toggle');
const hamburger = menuToggle.querySelector('.hamburger');
const cross = menuToggle.querySelector('.cross');
const listMobile = document.querySelector('.listMobile');

cross.classList.add('hidden'); // Ocultar el icono "X" inicialmente

let isOpen = false;

const toggleMenu = () => {
  isOpen = !isOpen;

  if (isOpen) {
    listMobile.classList.add('active');
    hamburger.classList.add('hidden');
    cross.classList.remove('hidden');
  } else {
    listMobile.classList.remove('active');
    hamburger.classList.remove('hidden');
    cross.classList.add('hidden');
  }
};

menuToggle.addEventListener('click', toggleMenu);
