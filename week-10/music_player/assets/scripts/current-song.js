'use strict';

const currentSong = function(Utilities) {
    const $currentSong = document.querySelector('.current-song')
    const $title = $currentSong.querySelector('.song-info h3');
    const $band =  $currentSong.querySelector('.song-info span');
    const $plusIcon = $currentSong.querySelector('.song-favourite-control button');
    const $favButton = $currentSong.querySelector('.song-favourite-control button:nth-child(2)');
    const $starIcon = $currentSong.querySelector('.song-favourite-control button:nth-child(2) svg')
    let trackInfo = null;
    
    
    const updateSong = function(track) {
        trackInfo = track;
        $title.textContent = track.title;
        $band.textContent = track.artist;
        $starIcon.style.fill = trackInfo.isFavourite ? '#5b9aff' : '#b4b4b4';
    }
    
    $favButton.addEventListener('click', function() {
        if (!trackInfo.isFavourite) {
            addToFavourite(trackInfo.id);
            trackInfo.isFavourite = 1;
        } else {
            deleteFromFavourite(trackInfo.id);
            trackInfo.isFavourite = 0;
        }
    })    

    const addToFavourite = function(trackId) {
        Utilities.AjaxCalls.addTrackToFavourites(trackId).then(() => 
            $starIcon.style.fill = '#5b9aff'
        )
    }

    const deleteFromFavourite = function(trackId) {
        Utilities.AjaxCalls.deleteTrackFromFavourites(trackId).then(() => 
            $starIcon.style.fill = '#b4b4b4'
        )
    }

    $plusIcon.addEventListener('click', function() {
        Utilities.AjaxCalls.getPlaylists().then(function(playlists) {
            Utilities.Dialog.createSelectDialog(function(playlistId) {
                Utilities.AjaxCalls.addTrackToPlaylist(playlistId, trackInfo.id)
            }, playlists)
        })
    })

    return {
        updateSong
    }
}