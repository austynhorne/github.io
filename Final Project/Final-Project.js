function toggleMenu(){
    console.log(document.getElementById("primaryNav").classList)
    document.getElementById("primaryNav").classList.toggle("hide")
}

let date = new Date();
let Y = date.getFullYear();
document.querySelector('#Year').textContent = Y;