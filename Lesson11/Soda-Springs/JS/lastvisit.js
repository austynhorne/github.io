let SD = new Date(localStorage.getItem('SD'));
const oneDay = 1000 * 60 * 60 * 24;
let d = date.getTime() - SD.getTime();
let t = Math.round(d / oneDay);
if ('SD' in localStorage) {
    document.querySelector('#Visit').innerHTML ='Your last visit was ' + t + ' days ago.';
} else {
    document.querySelector('#Visit').innerHTML = 'Welcome'
}
storeDate()

function storeDate() {
    localStorage.setItem('SD', date);
}