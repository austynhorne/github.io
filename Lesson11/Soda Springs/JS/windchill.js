let t = document.querySelector('#temp').innerHTML;
let w = document.querySelector('#wind').innerHTML;
if ((t <= 150) && (w > 0)) {
    let result = chill(t, w)
    document.querySelector('#chill').innerHTML = result.toFixed(0);
}
else {
    document.querySelector('#chill').innerHTML = "N/A"
}
function chill(t, w) {
    let f = 35.74 + (0.6215 * t) - (35.75 *  Math.pow(w, 0.16)) + (0.4275 * t * Math.pow(w, 0.16));
    return f
}