let temp = document.querySelector('#temp').innerHTML;
let w = document.querySelector('#wind').innerHTML;
if ((temp <= 150) && (w > 0)) {
    let result = chill(temp, w)
    document.querySelector('#chill').innerHTML = result.toFixed(0);
}
else {
    document.querySelector('#chill').innerHTML = "N/A"
}
function chill(temp, w) {
    let f = 35.74 + (0.6215 * temp) - (35.75 *  Math.pow(w, 0.16)) + (0.4275 * temp * Math.pow(w, 0.16));
    return f
}