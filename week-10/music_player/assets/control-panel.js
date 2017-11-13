'use strict';
(function() {
// updateTrackProgress and updateAudioProgress 
// Might not warrant separate function


const $audioFile = document.querySelector('audio');
const $playButton = document.querySelector('.track-control button:nth-child(2)');
const $playButtonImg = $playButton.querySelector('img');
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

const updateAudioProgress = function(percentage) {
    $audioFile.currentTime = $audioFile.duration * percentage;
}


$playButton.addEventListener('click', togglePlay);
$trackLengthSlider.addEventListener('input', function() {
    updateAudioProgress(this.value / 100); 
})

})();