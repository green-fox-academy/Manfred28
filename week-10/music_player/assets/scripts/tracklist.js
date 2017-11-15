'use strict';

const trackList = function(Utilities) {
    const $tracklist = document.querySelector('.track-list ol');
    let $trackElements = null;
    let currentlyPlayingIndex = null;
    let tracks = null;
    let onClickAction = null;

    const getTracklist = function(playlistId) {
        const config = {
            method: 'GET',
            url: 'http://localhost:3000/playlist-tracks',
            body: ''
        }
        if (playlistId !== 'all') {
            config.url += `/${playlistId}`
        }
        Utilities.ajaxCall(config).then(trackData => {
            tracks = trackData;
            $tracklist.innerHTML = ""; 
            onClickAction(tracks[0])
            createTracklistElements();
        })
    }

    const createTracklistElements = function() {
        tracks.forEach(function(track, i) {
            const $li = document.createElement('li');
            $li.innerHTML = `<span class="index">${i+1}</span>
                            ${track.title}
                            <span class="track-length">${Utilities.secondsToMMSS(track.duration)}</span>`
            $tracklist.appendChild($li);
            trackClickEvent($li);
        })
        $trackElements = $tracklist.querySelectorAll('li')
        Utilities.toggleActiveElementByIndex($trackElements, 0)
    }
    
    const trackClickEvent = function($track) {
            const index = $track.querySelector('.index').textContent
            $track.addEventListener('click', function() {
                currentlyPlayingIndex = parseInt(index) - 1;
                Utilities.toggleActiveElementByIndex($trackElements, currentlyPlayingIndex);
                onClickAction(tracks[currentlyPlayingIndex]);
            })
    }

    const getCurrentTrackInfo = function() {
        return tracks[currentlyPlayingIndex]
    }

    const nextTrack = function() {
        if (currentlyPlayingIndex < tracks.length - 1) {
            currentlyPlayingIndex += 1    
        } else {
            currentlyPlayingIndex = 0;
        }
        Utilities.toggleActiveElementByIndex($trackElements, currentlyPlayingIndex);        
        return tracks[currentlyPlayingIndex]
    }

    const previousTrack = function() {
        if (currentlyPlayingIndex > 0) {
            currentlyPlayingIndex -= 1    
        } else {
            currentlyPlayingIndex = tracks.length - 1;
        }
        Utilities.toggleActiveElementByIndex($trackElements, currentlyPlayingIndex);
        return tracks[currentlyPlayingIndex]
    }

    const getOnClickAction = function(fn) {
        onClickAction = fn;
    }

    return {
        getTracklist,
        getOnClickAction,
        getCurrentTrack: getCurrentTrackInfo,
        nextTrack,
        previousTrack
    }
} 

