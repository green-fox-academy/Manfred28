'use strict';

const playlists = function() {
    const $playlists = document.querySelector('.playlists ul');
    let $playlistElements = null;
    let playlists = null;

    const getPlaylists = function(playlistData) {
        playlists = playlistData;
        console.log(playlists);
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
        // $playlistElements = $playlists.querySelectorAll()
    }

    return {
        getPlaylists
    }
}
