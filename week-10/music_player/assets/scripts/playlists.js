'use strict';

const playlists = function(Utilities) {
    const $playlists = document.querySelector('.playlists ul');
    let $playlistElements = null;
    let playlists = null;
    let onClickAction = null
    const getPlaylistsConfig = {
        method: 'GET',
        url: 'http://localhost:3000/playlists'
    }

    const getPlaylists = function(playlistData) {
        Utilities.ajaxCall(getPlaylistsConfig).then(playlistData => {
            playlists = playlistData;
            createPlaylistElements();
        })
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
        addPlaylistElementEventListener();
        onClickAction('all'); // display All playlist by default
    }

    const addPlaylistElementEventListener = function(callback) {
        $playlistElements.forEach(function($playlist, index) {
            if (index === 0) {
                $playlist.addEventListener('click', function() {
                    Utilities.toggleActiveElementOnClick($playlistElements, this);
                    onClickAction('all')
                })
             } else {
                $playlist.addEventListener('click', function() {
                    Utilities.toggleActiveElementOnClick($playlistElements, this);                    
                    onClickAction(playlists[index - 1].id)
                })
            }
        })
    }

    const getOnClickAction = function(fn) {
        onClickAction = fn;
    }
    
    return {
        getPlaylists,
        getOnClickAction
    }
}
