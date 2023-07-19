const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const currentTemp_2 = document.querySelector('#current-temp-2');
const weatherIcon_2 = document.querySelector('#weather-icon-2');
const captionDesc_2 = document.querySelector('#caption-2');

const currentTemp_3 = document.querySelector('#current-temp-3');
const weatherIcon_3 = document.querySelector('#weather-icon-3');
const captionDesc_3 = document.querySelector('#caption-3');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.09&lon=-113.56&units=imperial&appid=00fe2db85081e760045e7f549842c9fe';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(data) {
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

    currentTemp_2.innerHTML = `${data.list[1].main.temp}&deg;F`;
    const iconsrc_2 = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    let desc_2 = data.list[8].weather[0].description;
    weatherIcon_2.setAttribute('src', iconsrc_2);
    weatherIcon_2.setAttribute('alt', desc_2);
    captionDesc_2.textContent = `${desc_2}`;

    currentTemp_3.innerHTML = `${data.list[2].main.temp}&deg;F`;
    const iconsrc_3 = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
    let desc_3 = data.list[16].weather[0].description;
    weatherIcon_3.setAttribute('src', iconsrc_3);
    weatherIcon_3.setAttribute('alt', desc_3);
    captionDesc_3.textContent = `${desc_3}`;
  }


  
  
  
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