// Script Sheet

// $( function() {
//     $( "#genre" )
//       .selectmenu()
//       .selectmenu( "menuWidget" )
//         .addClass( "overflow" );
 
//   } );

  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "b527f11ed1mshff817c77ab9f92cp1d9953jsnd565aa730026"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
