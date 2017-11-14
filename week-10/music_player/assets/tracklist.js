'use strict';

const trackList = function() {
    const $tracklist = document.querySelector('.track-list ol');
    let $trackElements = null;
    let currentlyPlayingIndex = null;
    
    const tracks = [
        {
        title: 'ayy',
        band: 'god knows',
        url: 'file:///C:/GreenFox/Manfred28/week-10/music_player/assets/music/test.mp3',
        length: '120'
    },
    {
        title: 'party',
        band: 'I needed that',
        url: 'file:///C:/GreenFox/Manfred28/week-10/music_player/assets/music/test.mp3',
        length: '150'
    },
    {
        title: 'hey',
        band: 'coffee',
        url: 'file:///C:/GreenFox/Manfred28/week-10/music_player/assets/music/test.mp3',
        length: '100'
    }
    ]

    const createTracklistElements = function() {
        tracks.forEach(function(elem, i) {
            const $li = document.createElement('li');
            $li.innerHTML = `<span class="index">${i+1}</span>
                            ${elem.title}
                            <span class="track-length">${elem.length}</span>`
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

    createTracklistElements();

    return {
        trackOnClick: addTracklistElementEventListener,
        getCurrentTrack: getCurrentTrackInfo,
        nextTrack,
        previousTrack
    }
} 

