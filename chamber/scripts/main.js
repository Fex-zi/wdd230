// Hamburger Menu
const hamburgerButton = document.getElementById('hamburgerButton');
const mainMenu = document.getElementById('mainMenu');

hamburgerButton.addEventListener('click', () => {
  mainMenu.classList.toggle('show');
});


