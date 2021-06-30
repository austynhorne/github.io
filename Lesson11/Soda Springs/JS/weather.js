const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=bdc18c3c83f3b30877e8028a22b7c78a&units=imperial";
fetch(weatherURL)                                                                    
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('wind').textContent = jsObject.wind.speed.toFixed(0);
    document.getElementById('Humidity').textContent = `${jsObject.main.humidity}%`;
    document.getElementById('sky').textContent = jsObject.weather[0].description;
  });