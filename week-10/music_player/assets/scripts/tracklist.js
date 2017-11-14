'use strict';

const trackList = function() {
    const Utilities = utilities();
    const $tracklist = document.querySelector('.track-list ol');
    let $trackElements = null;
    let currentlyPlayingIndex = null;
    let tracks = null;

    const getTracks = function(tracklist) {
        tracks = tracklist;
        createTracklistElements();
    }

    const createTracklistElements = function() {
        tracks.forEach(function(track, i) {
            const $li = document.createElement('li');
            $li.innerHTML = `<span class="index">${i+1}</span>
                            ${track.title}
                            <span class="track-length">${Utilities.secondsToMMSS(track.duration)}</span>`
            $tracklist.appendChild($li);
        })
        $trackElements = $tracklist.querySelectorAll('li')
    }
    
    const addTracklistElementEventListener = function(callback) {
        $trackElements.forEach(function(track) {
            const index = track.querySelector('.index').textContent
            track.addEventListener('click', function() {
                currentlyPlayingIndex = parseInt(index) - 1;
                styleActiveElement();
                callback(tracks[currentlyPlayingIndex]);
            })
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
        styleActiveElement();
        return tracks[currentlyPlayingIndex]
    }

    const previousTrack = function() {
        if (currentlyPlayingIndex > 0) {
            currentlyPlayingIndex -= 1    
        } else {
            currentlyPlayingIndex = tracks.length - 1;
        }
        styleActiveElement();
        return tracks[currentlyPlayingIndex]
    }

    const styleActiveElement = function() {
        $trackElements.forEach(function($track, i) {
            $track.classList.remove('active')
            if (i === currentlyPlayingIndex) {
                $track.classList.add('active')
            }    
        })
    }

    return {
        trackOnClick: addTracklistElementEventListener,
        getCurrentTrack: getCurrentTrackInfo,
        getTracks,
        nextTrack,
        previousTrack
    }
} 

