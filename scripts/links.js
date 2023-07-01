const baseURL = "https://fex-zi.github.io/wdd230/";

const linksURL = "https://fex-zi.github.io/wdd230/data/links.json";



async function getLinks() {
    try {
      const response = await fetch(linksURL);
      const data = await response.json();
      displayLinks(data.weeks);
    } catch (error) {
      console.log(error);
    }
  }

  getLinks();


 
  function displayLinks(weeks) {
    const activitiesContainer = document.querySelector('#activities-container');

    weeks.forEach((week, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${week.week}: `;
      
      week.links.forEach((link, linkIndex) => {
        const linkAnchor = document.createElement('a');
        linkAnchor.href = baseURL + link.url;
        linkAnchor.textContent = link.title;
        listItem.appendChild(linkAnchor);

        if (linkIndex < week.links.length - 1) {
          const separator = document.createTextNode(' | ');
          listItem.appendChild(separator);
        }
      });

      activitiesContainer.appendChild(listItem);

      if (index < weeks.length - 1) {
        const lineBreak = document.createElement('br');
        activitiesContainer.appendChild(lineBreak);
      }
    });
  }
  