
function getLyrics(){

    fetch("http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin+bieber&page_size=3&page=1&s_track_rating=desc&apikey=f80d2fdb26277ec2298e171be0507223").then(function(res){return res.jsonp().then(function (data){
        console.log(data)
    })})



    // var artistSearch = document.getElementById("artistSearch").value;
    // document.getElementById("lyrics").textContent = "";
    //   $.ajax({
    //     type: "GET",
    //     data: {
    //         apikey:"f80d2fdb26277ec2298e171be0507223",
    //         q_artist: artistSearch,
    //         format:"json",
    //         callback:"json_callback"
    //     },
    //     // url: "https://api.musixmatch.com/ws/1.1/band.search?q_artist=nirvana",
    //     url : "http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin+bieber&page_size=3&page=1&s_track_rating=desc",
    //     dataType: "json",
    //     jsonpCallback: 'json_callback',
    //     contentType: 'application/json',
    //     success: function(data) {
    //         console.log(data); 
    //         console.log(data.message.body.track_list[0].track.album_coverart_350x350)
    //         console.log(data.message.body.track_list[0].track.lyrics_id)
    //         var rand = data.message.body.track_list[Math.floor(Math.random() * data.message.body.track_list.length)];
    //         console.log(rand.track.track_id)
    //         var thisTrack = (rand.track.track_id)
    //         var thisPic = rand.track.album_coverart_350x350;
    //         console.log(thisPic)
    
    //         var p = document.createElement("p");
    //         p.textContent = thisTrack;
    //         p.id = thisTrack;
    
    //         var img = document.createElement("img")
    //         img.setAttribute("src",thisPic)
    
    //         document.getElementById("lyrics").appendChild(p).style.opacity = 0;
    //         document.getElementById("lyrics").appendChild(img);
    //         document.getElementById("ghost").click();
    
    //     },
    //     error: function(jqXHR, textStatus, errorThrown) {
    //         console.log(jqXHR);
    //         console.log(textStatus);
    //         console.log(errorThrown);
    //     }    
    //   });
     };
    
    
     function getLyricsNow(){
        var trackId = document.getElementById("lyrics").textContent;
        console.log(trackId)
      $.ajax({
        type: "GET",
        data: {
            apikey:"445d6196c08dc2b7490929f18149d684",
            track_id: trackId,
            format:"jsonp",
            callback:"jsonp_callback"
        },
        url: "https://api.musixmatch.com/ws/1.1/track.lyrics.get",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function(data) {
           console.log(data); console.log(data.message.body.lyrics.lyrics_body); 
          var lyricsBody = data.message.body.lyrics.lyrics_body.split(/\s+/).slice(0,100).join(" ")+ "...";
           
            var j = document.createElement("p")
            j.textContent = lyricsBody
            document.getElementById("lyrics").appendChild(j)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }    
      });
     };