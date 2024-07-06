const burgerMenu = document.getElementById('burger-menu');
const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const burgerMenuOverlay = document.querySelector('.burger-menu-overlay');
const burgerMenuLinks = document.querySelectorAll('.burger-menu-link');

const toggleBurgerMenu = () => {
  burgerMenu.classList.toggle('burger-menu-active');
};

const closeBurgerMenu = () => {
  if (burgerMenu.classList.contains('burger-menu-active')) {
    burgerMenu.classList.remove('burger-menu-active');
  }
};

burgerMenuBtn.addEventListener('click', e => {
  e.preventDefault();
  toggleBurgerMenu();
});

burgerMenuOverlay.addEventListener('click', () => {
  closeBurgerMenu();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeBurgerMenu();
  }
});

burgerMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeBurgerMenu();
  });
});
