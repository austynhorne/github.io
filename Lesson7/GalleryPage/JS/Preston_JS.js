/****** NAV ******/
function toggleMenu(){
    console.log(document.getElementById("primaryNav").classList)
    document.getElementById("primaryNav").classList.toggle("hide")
 }
/*** Year ***/
let date = new Date();
let Y = date.getFullYear();
document.querySelector('#Year').textContent = Y;
/*** Last Edited ***/
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
/*** Banner ***/
document.querySelector('#date').innerHTML = FullDate;
if (date.getDay() === 5) {
    document.querySelector('.banner').style.display = 'block';
    }
    else {
       document.querySelector('.banner').style.display = 'none';
    }
