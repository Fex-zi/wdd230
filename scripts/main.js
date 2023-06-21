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

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

