'use strict';

(function() {

const $track = document.querySelector('audio');
const $playButton = document.querySelector('.track-control button:nth-child(2)');
const $playButtonImg = $playButton.querySelector('img');
const $slider = document.querySelector('.track-length-control input[type="range"]')


const togglePlay = function() {
    let sliderUpdateInterval = null;
    [$playButtonImg.src, $playButtonImg.dataset.altSrc] = [$playButtonImg.dataset.altSrc, $playButtonImg.src];
    if ($track.paused) {
        $track.play();
        sliderUpdateInterval = setInterval(updateSlider, 200)
    } else {
        $track.pause();
        clearInterval(sliderUpdateInterval);
    } 
}

const updateSlider = function() {
    $slider.value = $track.currentTime / $track.duration * 100
}

$playButton.addEventListener('click', togglePlay);

})();