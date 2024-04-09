const menuToggle = document.querySelector('.menu-toggle');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.cross');
const listMobile = document.querySelector('.listMobile');

let isOpen = true;

menuToggle.addEventListener('click', () => {
  isOpen = !isOpen; // Toggle the isOpen flag

  if (isOpen) {
    hamburger.style.display = 'grid';
    close.style.display = 'none';
    listMobile.style.display = 'none';
  } else {
    hamburger.style.display = 'none';
    close.style.display = 'grid';
    listMobile.style.display = 'grid';
  }
});
