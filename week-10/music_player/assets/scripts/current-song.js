'use strict';

const currentSong = function(Utilities) {
    const $currentSong = document.querySelector('.current-song')
    const $title = $currentSong.querySelector('.song-info h3');
    const $band =  $currentSong.querySelector('.song-info span');
    const $favButton = $currentSong.querySelector('.song-favourite-control button:nth-child(2)');
    let songInfo = null;


    const updateSong = function(track) {
        songInfo = track;
        $title.textContent = track.title;
        $band.textContent = track.artist
    }

    $favButton.addEventListener('click', function() {
        const addToFavConfig = {
            method: 'POST',
            url: `http://localhost:3000/playlists/1/${songInfo.id}`,
            body: {}
        }
        Utilities.ajaxCall(addToFavConfig).then()
    })    

    return {
        updateSong
    }
}