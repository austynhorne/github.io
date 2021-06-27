const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=bdc18c3c83f3b30877e8028a22b7c78a&units=imperial";
fetch(apiURL)                                                                    
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temp').textContent = jsObject.main.temp;
  });