const burger = () => {
  const burgerButton = document.querySelector('.burger');
  const closeButton = document.querySelector('.close-button');
  const menu = document.querySelector('.menu');

  if (!burgerButton) return false;

  const toggleMenu = () => {
    menu.classList.toggle('visible');
    burgerButton.classList.toggle('active');
  };

  const closeMenu = () => {
    menu.classList.remove('visible');
    burgerButton.classList.remove('active');
  };

  burgerButton.addEventListener('click', toggleMenu);

  closeButton.addEventListener('click', closeMenu);
};

export default burger;
