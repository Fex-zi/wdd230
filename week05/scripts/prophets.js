const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); // Temporary testing 
  
    displayProphets(data.prophets); // Call the displayProphets function with the array of prophets
  }
  
  getProphetData();
  

  
  
  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      let card = document.createElement('section');
      let fullName = document.createElement('h2');
      let portrait = document.createElement('img');
  
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      card.appendChild(fullName);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    });
  }
  