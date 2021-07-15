function toggleweather(){
    console.log(document.getElementById("weathertable").classList)
    document.getElementById("weathertable").classList.toggle("hide")
}

const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=41.2&lon=-111.9&exclude={part}&appid=bdc18c3c83f3b30877e8028a22b7c78a&units=imperial";
fetch(weatherURL)                                                                    
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temp').textContent = jsObject.current.temp.toFixed(0);
    document.getElementById('Humidity').textContent = jsObject.current.humidity;
    document.getElementById('sky').textContent = jsObject.current.weather[0].description;
  });