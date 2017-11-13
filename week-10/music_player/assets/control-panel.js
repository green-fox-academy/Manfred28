'use strict';

const $track = document.querySelector('audio');
const $playButton = document.querySelector('.track-control button:nth-child(2)');
const $playButtonImg = $playButton.querySelector('img');


const togglePlay = function() {
    [$playButtonImg.src, $playButtonImg.dataset.altSrc] = [$playButtonImg.dataset.altSrc, $playButtonImg.src];
    $track.paused ? $track.play() : $track.pause();
}

console.log($track.duration)
$playButton.addEventListener('click', togglePlay);