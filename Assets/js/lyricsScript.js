let musicUrl = `https://api.musixmatch.com/ws/1.1/f80d2fdb26277ec2298e171be0507223`

function getMusicInfo() {
    // event.preventDefault();

    fetch(musicUrl)
        .then(function (res) {
            return res.json();
        })
        .then(function (musicData) {
            console.log(musicData);
        })
}

getMusicInfo()