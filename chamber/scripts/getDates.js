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