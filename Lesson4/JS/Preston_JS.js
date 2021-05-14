function toggleMenu(){
    console.log(document.getElementById("primaryNav").classList)
    document.getElementById("primaryNav").classList.toggle("hide")
}
let date = new Date();
let Year = date.getFullYear();
document.querySelector('#Year').textContent = Year;

let Modified = document.lastModified;
document.querySelector('#Modified').textContent = Modified;