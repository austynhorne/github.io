const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(eventURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject["towns"]
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Soda Spring") {
                const events = towns[i].events
                for (var event in events) {
                    let section = document.querySelector(".events")
                    let p = document.createElement("p")
                    p.textContent = events[event]
                    console.log(p)
                    section.appendChild(p)

                }
            }
        }
    })