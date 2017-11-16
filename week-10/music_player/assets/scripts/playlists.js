'use strict';

const playlists = function(Utilities) {
    const $playlistContainer = document.querySelector('.playlists')
    const $playlists = $playlistContainer.querySelector('ul');
    const $playlistAdder = $playlistContainer.querySelector('.playlist-adder button');
    let $playlistElements = null;
    let playlists = null;
    let onClickAction = null    
    
    
    const getPlaylists = function() {
        Utilities.AjaxCalls.getPlaylists().then(playlistData => {
            $playlists.innerHTML = "<li>All tracks</li>";
            playlists = playlistData;
            createPlaylistElements();
        })
    }
    
    const createPlaylistElements= function() {
        playlists.forEach(function(playlist) {
            const $playlistElement = document.createElement('li');
            $playlistElement.textContent = playlist.title
            if (!playlist.system) {
                $playlistElement.appendChild(createDeleteButton(playlist.id))
            }
            $playlists.appendChild($playlistElement);
        });
        $playlistElements = $playlists.querySelectorAll('li')
        addPlaylistElementEventListener();
        onClickAction('all'); // display All playlist by default
        Utilities.toggleActiveElementByIndex($playlistElements, 0)
    }

    $playlistAdder.addEventListener('click', function() {
        Utilities.Dialog.createTextDialog(function(title) {
            Utilities.AjaxCalls.addPlaylist(title)
            .then(getPlaylists());
        })
    })
    
    const createDeleteButton = function(playlistId) {
        // $button.parentElement.remove seems to remove the list item from DOM
        // even if the db operation failed
        const $button = document.createElement('button');
        $button.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        $button.addEventListener('click', function() {
            Utilities.AjaxCalls.deletePlaylist(playlistId).then($button.parentElement.remove());
        })
        return $button;
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
