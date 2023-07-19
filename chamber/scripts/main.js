// Hamburger Menu
const hamburgerButton = document.getElementById('hamburgerButton');
const mainMenu = document.getElementById('mainMenu');

hamburgerButton.addEventListener('click', () => {
  mainMenu.classList.toggle('show');
});


const sidebarContent = document.querySelector('.visits-cont');
const lastVisit = localStorage.getItem('lastVisit');

  if (!lastVisit) {
    sidebarContent.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const lastVisitDate = new Date(parseInt(lastVisit));
    const currentDate = new Date();
    const timeDiff = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));

    if (timeDiff === 0) {
      sidebarContent.textContent = "Back so soon! Awesome!";
    } else {
      const timeMessage = `You last visited ${timeDiff} ${timeDiff === 1 ? 'day' : 'days'} ago.`;
      sidebarContent.textContent = timeMessage;
    }
  }

localStorage.setItem('lastVisit', Date.now().toString());


