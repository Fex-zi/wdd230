//Banner
// Check if the current day is Monday, Tuesday, or Wednesday
function isWeekday() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday: 1, Tuesday: 2, Wednesday: 3
}

// Display the banner on weekdays
function showBanner() {
  const banner = document.getElementById('header');
  if (isWeekday()) {
    banner.style.display = 'block';
  }
}

// Hide the banner when the "Close" button is clicked
function hideBanner() {
  const banner = document.getElementById('header');
  banner.style.display = 'none';
}

// Event listener for the "Close" button
const closeBtn = document.getElementById('btn-bgstroke');
closeBtn.addEventListener('click', hideBanner);

// Show the banner when the page loads
window.addEventListener('load', showBanner);


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


