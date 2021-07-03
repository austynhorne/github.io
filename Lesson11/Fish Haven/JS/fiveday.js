const apiURLforecast="https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ab1af1b162d4021b8b58055befd97b83&units=imperial";
    fetch(apiURLforecast) 
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);

        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        //filter the json data to just one time a day
        const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));

        console.log(fiveDayForecast);
// loop through each day
        fiveDayForecast.forEach( x => {
            let d = new Date(x.dt_txt);
            console.log(d);
            document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = x.main.temp.toFixed(0);
            const image = 'http://openweathermap.org/img/wn/' + x.weather[0].icon + '@2x.png';
            const desc = x.weather[0].description;
            document.getElementById(`weathericon${day+1}`).setAttribute('src', image);
            document.getElementById(`weathericon${day+1}`).setAttribute('alt', desc);
            day++;
          });

        });