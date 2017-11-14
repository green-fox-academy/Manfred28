'use strict';

const playlists = function() {
    const $playlists = document.querySelector('.playlists ul');
    let $playlistElements = null;
    let playlists = null;

    const getPlaylists = function(playlistData) {
        playlists = playlistData;
        createPlaylistElements();
    }

    const createPlaylistElements= function() {
        playlists.forEach(function(playlist) {
            const $playlistElement = document.createElement('li');
            $playlistElement.innerHTML = `
                ${playlist.title}
                ${playlist.system ? "" : 
                    `<button>
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>`
                }
            `        
            $playlists.appendChild($playlistElement);
        });
        $playlistElements = $playlists.querySelectorAll('li')
    }

    const addPlaylistElementEventListener = function(callback) {
        $playlistElements.forEach(function($playlist, index) {
            if (index === 0) {
                $playlist.addEventListener('click', function() {
                    callback('all')
                })
             } else {
                $playlist.addEventListener('click', function() {
                    callback(playlists[index - 1].id)
                })
            }
        })
    }
    

    return {
        getPlaylists,
        playlistOnClickAction: addPlaylistElementEventListener
    }
}
