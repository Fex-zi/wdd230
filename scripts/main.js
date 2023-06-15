// Hamburger Menu
const hamburgerButton = document.getElementById('hamburgerButton');
const mainMenu = document.getElementById('mainMenu');

hamburgerButton.addEventListener('click', () => {
  mainMenu.classList.toggle('show');
});

// Dark Mode Toggle
const darkModeButton = document.getElementById('darkModeButton');
const main = document.querySelector('main');

darkModeButton.addEventListener('click', () => {
    if (darkModeButton.textContent.includes("☑️")) {
        main.classList.toggle('dark-mode');
        darkModeButton.textContent = "❎";
    } else {
        main.classList.toggle('dark-mode');
        darkModeButton.textContent = "☑️";
    }
  
});
