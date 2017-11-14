'use strict';

const currentSong = function() {
    const $currentSong = document.querySelector('.current-song')
    const $title = $currentSong.querySelector('.song-info h3');
    const $band =  $currentSong.querySelector('.song-info span');

    const updateSong = function(track) {
        $title.textContent = track.title;
        $band.textContent = track.artist
    }

    return {
        updateSong
    }
}