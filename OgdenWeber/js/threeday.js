fetch(weatherURL)                                                                    
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    document.getElementById(`dayofweek1`).textContent = weekday[d.getDay()];
    document.getElementById(`dayofweek2`).textContent = weekday[d.getDay() +1];
    document.getElementById(`dayofweek3`).textContent = weekday[d.getDay() +2];

    document.getElementById('forecast1').textContent = jsObject.daily[0].temp.min.toFixed(0) + " / " + jsObject.daily[0].temp.max.toFixed(0);
    document.getElementById('forecast2').textContent = jsObject.daily[1].temp.min.toFixed(0) + " / " + jsObject.daily[1].temp.max.toFixed(0);
    document.getElementById('forecast3').textContent = jsObject.daily[2].temp.min.toFixed(0) + " / " + jsObject.daily[2].temp.max.toFixed(0);
  });