let date = new Date();
let Year = date.getFullYear();
document.querySelector('#Year').textContent = Year;

let Modified = document.lastModified;
document.querySelector('#Modified').textContent = Modified;