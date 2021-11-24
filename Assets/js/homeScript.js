// Script Sheet



fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
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
})
.catch(err => {
	console.error(err);
});


document.addEventListener('DOMContentLoaded' , () => {
  const form = document.querySelector('#form');

  form.addEventListener('submit' , e => {
    e.preventDefault();

    getWeatherInfo2(document.querySelector('#results'),form);
  }, false);
  
  });
