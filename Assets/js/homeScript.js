
function clearResults() {
	console.log('Your search results have been cleared.')
	let albumClear = document.getElementById('albumListResults');
	albumClear.textContent = '';
}

  let songButton = document.querySelector('#getSongs')
  let albumButton = document.querySelector('#getAlbums')

  albumButton.addEventListener('click', getAlbums);

  function getAlbums(event) {
	  event.preventDefault();
	  clearResults();
	  let artistName = document.getElementById('artistName').value;
	  fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + artistName, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
				"x-rapidapi-key": "b527f11ed1mshff817c77ab9f92cp1d9953jsnd565aa730026"
			}
	})
	.then(response => {
		return response.json()
	})
	.then(response => {
		// console.log(response)
		// console.log(response.data)
		// create array here
		for (let i = 0; i < response.data.length; i++) {
			let currentAlbum = response.data[i];
			console.log(currentAlbum);
			
			let albumDisplay = document.getElementById('albumListResults');

			let albumUL = document.createElement('ul');
			albumUL.setAttribute('class', 'albumUL');
			albumDisplay.append(albumUL);

			let albumList = document.createElement('li');
			albumList.textContent = currentAlbum.album.title;
			albumUL.append(albumList);
			// if arr.includes albumName, don't push
			// MDN arr.includes (should give a true or false value)

		}



	})
	.catch(err => {
		console.error(err);
	});
  }
  