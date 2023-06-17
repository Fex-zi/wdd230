// Get the current year
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = 'Last Modified: ' + document.lastModified;
