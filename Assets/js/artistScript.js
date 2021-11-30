// Script Sheet
let cards = document.querySelectorAll(".card");
let upcomingEvents = document.querySelector("h4");
let eventSection = document.querySelector("#event-section");
let artistHeader = document.querySelector("h2");
let artistPicture = document.querySelector("#artist-picture");
let artistLink = document.querySelector("#artist-link")


fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=lady-gaga', {
        "method": "GET",
        "headers": {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key": "b527f11ed1mshff817c77ab9f92cp1d9953jsnd565aa730026"
          }
  })
  .then(response => {
      return response.json()
  })
  .then(data => {
      console.log(data)
      let artistID = data.data[0].artist.id
        fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/${artistID}`, {
            "method": "GET",
            "headers": {
                 "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                 "x-rapidapi-key": "b527f11ed1mshff817c77ab9f92cp1d9953jsnd565aa730026"
          }
    })
    .then(response => {
        return response.json()
    })
    .then(artistData => {
        console.log(artistData)
        artistHeader.textContent = artistData.name
        artistPicture.setAttribute("src", artistData.picture_medium)
        artistLink.setAttribute("href", artistData.link)
        
    });
  });



fetch(`https://api.seatgeek.com/2/events?performers.slug=lady-gaga&client_id=MTk3NzQyNzh8MTYzODE5OTQ5Mi4zNzY5OTA2`, {
	"method": "GET",
	"headers": {
	}
})
.then(response => {
    return response.json()
})
.then(data => {
	console.log(data);
    if (data.events === null) {
        upcomingEvents.textContent = "There are no upcoming events";
    } else {
        for (let i = 0; i < 3; i++) {
            if (data.events[i]) {
                let concertDate = data.events[i].datetime_local.substring(0,4)
                concertDate = parseInt(concertDate)
                console.log(concertDate)
                if (concertDate < 2023) {
                    let card = document.createElement("div")
                    card.setAttribute("class", "card");
                    // card.setAttribute("style",  "width:18rem")
                    eventSection.appendChild(card);

                    let concert = document.createElement("div")
                    concert.setAttribute("class", "card-body");
                    card.appendChild(concert);

                    let cardTitle = document.createElement("h5")
                    cardTitle.setAttribute("class", "card-title");
                    cardTitle.textContent = data.events[i].title
                    concert.append(cardTitle);

                    let cardTime = document.createElement("h5")
                    cardTime.setAttribute("class", "card-subtitle mb-2 text-muted");
                    cardTime.textContent = data.events[i].datetime_local
                    concert.append(cardTime);

                    let cardText = document.createElement("p")
                    cardText.setAttribute("class", "card-text");
                    cardText.textContent = data.events[i].venue.name + " " + data.events[i].venue.display_location
                    concert.append(cardText);

                    let cardUrl = document.createElement("a")
                    cardUrl.setAttribute("href", data.events[i].url) 
                    cardUrl.setAttribute("target", "_blank")
                    cardUrl.textContent = "Buy Tickets"
                    concert.append(cardUrl);
                } else {

                    let card = document.createElement("div")
                    card.setAttribute("class", "card");
                    // card.setAttribute("style",  "width:18rem")
                    eventSection.appendChild(card);

                    let concert = document.createElement("div")
                    concert.setAttribute("class", "card-body");
                    card.appendChild(concert);

                    let cardTitle = document.createElement("h5")
                    cardTitle.setAttribute("class", "card-title");
                    cardTitle.textContent = data.events[i].title
                    concert.append(cardTitle);

                    let cardTime = document.createElement("h5")
                    cardTime.setAttribute("class", "card-subtitle mb-2 text-muted");
                    cardTime.textContent = "TBD"
                    concert.append(cardTime);

                    let cardText = document.createElement("p")
                    cardText.setAttribute("class", "card-text");
                    cardText.textContent = data.events[i].venue.name + " " + data.events[i].venue.display_location
                    concert.append(cardText);

                    let cardUrl = document.createElement("a")
                    cardUrl.setAttribute("href", data.events[i].url) 
                    cardUrl.setAttribute("target", "_blank")
                    cardUrl.textContent = "Buy Tickets"
                    concert.append(cardUrl);
                }
            } else {
                return;
            }
        }
    }
})
.catch(err => {
	console.error(err);
});


