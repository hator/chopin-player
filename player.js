

function shufflePlaylist() {
    for(var i = 0; i < playlist.length; i++) {
        var randomIndex = Math.floor(Math.random() * i);

        var tmp = playlist[i];
        playlist[i] = playlist[randomIndex];
        playlist[randomIndex] = tmp;
    }
}

function getNextSong() {
    if(nextSongIndex >= playlist.length) {
        shufflePlaylist();
        nextSongIndex = 0;
    }

    var nextSongFilename = playlist[nextSongIndex];
    nextSongIndex++;


    return {
        url: 'music/' + encodeURIComponent(nextSongFilename),
        title: nextSongFilename.slice(0, -4).trim()
    };
}

function startPlay() {
    var button = document.getElementById('playButton');
    var audio = document.getElementById('audio');

    audio.play()
        .then(function() {
            button.className = 'pause';
            button.onclick = pause;
        });

    audio.addEventListener('ended', handleSongEnded);
}

function pause() {
    var button = document.getElementById('playButton');
    var audio = document.getElementById('audio');

    audio.pause();
    button.className = 'play';
    button.onclick = startPlay;
}

function handleSongEnded() {
    prepareNextSong();
    startPlay();
}

function prepareNextSong() {
    currentSong = getNextSong();
    setSongUrl(currentSong.url);
    displaySongTitle(currentSong.title);
}

function displaySongTitle(title) {
    var titleElement = document.getElementById('title');

    titleElement.innerHTML = title;
}

function setSongUrl(url) {
    var audio = document.getElementById('audio');

    audio.src = url;
    audio.load();
}


shufflePlaylist();

var nextSongIndex = 0;
prepareNextSong();
