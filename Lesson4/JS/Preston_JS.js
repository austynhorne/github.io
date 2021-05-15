function toggleMenu(){
    console.log(document.getElementById("primaryNav").classList)
    document.getElementById("primaryNav").classList.toggle("hide")
}
let d = new Date();
let Y = d.getFullYear();
document.querySelector('#Year').textContent = Y;

let date = new Date();
let day = new Array(7)
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday"
day[5] = "Friday";
day[6] = "Saturday"
let month = new Array(12)
month[0] = "Januray";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
let FullDate = day[date.getDay()] + ", " + " " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
document.querySelector('#date').innerHTML = FullDate;
