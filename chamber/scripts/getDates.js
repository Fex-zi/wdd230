// Get the current year
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = 'Last Modified: ' + document.lastModified;

// Get the timestamp
function setCurrentTimestamp() {
    var timestampField = document.getElementById("timestamp");
    var currentTimestamp = new Date().toISOString();
    timestampField.value = currentTimestamp;
  }

  // Call the function when the form is loaded
  window.addEventListener("load", setCurrentTimestamp);

  

//Weather date
const yearSpan_1 = document.getElementById('weather-day');
const yearSpan_2 = document.getElementById('weather-day-2');
const yearSpan_3 = document.getElementById('weather-day-3');



let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let d = new Date();
let dayName = days[d.getDay()];
let dayName_2 = days[d.getDay()+1];
let dayName_3 = days[d.getDay()+2];
yearSpan_1.textContent = dayName;
yearSpan_2.textContent = dayName_2;
yearSpan_3.textContent = dayName_3;



