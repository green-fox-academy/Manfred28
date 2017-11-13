'use strict';
(function() {
    
const $audioFile = document.querySelector('audio');
const $playButton = document.querySelector('.track-control button:nth-child(2)');
const $playButtonImg = $playButton.querySelector('img');
const $volumeSlider = document.querySelector('.volume-control input[type="range"]')
const $trackLengthSlider = document.querySelector('.track-length-control input[type="range"]')
const $currentTime = document.querySelector('.track-length-control .current-time');
const $trackLength = document.querySelector('.track-length-control .track-length');


const togglePlay = function() {
    let sliderUpdateInterval = null;
    [$playButtonImg.src, $playButtonImg.dataset.altImg] = [$playButtonImg.dataset.altImg, $playButtonImg.src];   
    if ($audioFile.paused) {
        $audioFile.play();
        sliderUpdateInterval = setInterval(updateTrackProgress, 200)
    } else {
        $audioFile.pause();
        clearInterval(sliderUpdateInterval);
    } 
}

const updateTrackProgress = function() {
    $trackLengthSlider.value = $audioFile.currentTime / $audioFile.duration * 100;
    $currentTime.textContent = convertSecondsToMMSSFormat($audioFile.currentTime);
}

const convertSecondsToMMSSFormat = function(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ':' + seconds
}


// Need to prevent default, otherwise when the play button is already
// focused, the togglePlay event fires twice
document.addEventListener('keyup', function(e) {
    if (e.keyCode === 32 || e.code === 'Space') {
        e.preventDefault();
        togglePlay();    
    }
})

$playButton.addEventListener('click', togglePlay);

$trackLengthSlider.addEventListener('input', function() {
    $audioFile.currentTime = $audioFile.duration * (this.value / 100);
})

$volumeSlider.addEventListener('input', function() {
    $audioFile.volume = this.value / 100;
})

})();