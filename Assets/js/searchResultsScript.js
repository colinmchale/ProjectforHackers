// Script Sheet

// $( function() {
//     $( "#genre" )
//       .selectmenu()
//       .selectmenu( "menuWidget" )
//         .addClass( "overflow" );
 
//   } );






let SongSearch = document.querySelector('#SongSearch');
SongSearch.addEventListener('submit',clearDaList)
SongSearch.addEventListener('submit',getSongs);

let url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q='

const ul = document.getElementById('artists');

function clearDaList(){
    
    document.getElementsByClassName

}

function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

function getSongs(event){
event.preventDefault();
let artistName = document.getElementById("SearchInput").value;
console.log(artistName);
fetch(url + artistName, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "b527f11ed1mshff817c77ab9f92cp1d9953jsnd565aa730026"
	}
})
.then(response => {
    return response.json()
})
.then(function(response){
    console.log(response);
    let artists = response.data;
    return artists.map(function(artist){
        let li= createNode('li');
        li.textContent = artist.title;
        append(ul,li);
    })
})
.catch(err => {
	console.error(err);
});

}


$(document).mousemove(function(e){
    $("#image").stop().animate({left:e.pageX, top:e.pageY});
});