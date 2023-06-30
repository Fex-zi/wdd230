const baseURL = "https://fex-zi.github.io/wdd230/";

const linksURL = "https://fex-zi.github.io/wdd230/data/links.json";



async function getLinks() {
    try {
      const response = await fetch(linksURL);
      const data = await response.json();
      displayLinks(data);
    } catch (error) {
      console.log(error);
    }
  }

  getLinks();
  



function displayLinks(weeks) {
    const activitiesContainer = document.querySelector('#activities-container');
  
    weeks.forEach((week) => {
      const weekDiv = document.createElement('div');
      weekDiv.classList.add('week');
      weekDiv.textContent = week.week;
      
      const linksList = document.createElement('ul');
      week.links.forEach((link) => {
        const listItem = document.createElement('li');
        const linkAnchor = document.createElement('a');
        linkAnchor.href = baseURL + link.url;
        linkAnchor.textContent = link.title;
        listItem.appendChild(linkAnchor);
        linksList.appendChild(listItem);
      });
      
      weekDiv.appendChild(linksList);
      activitiesContainer.appendChild(weekDiv);
    });
  }
  