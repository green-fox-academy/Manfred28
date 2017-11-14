'use strict';
(function() {
    
const $controlPanel = document.querySelector('.media-player .control-panel') 
const $audioFile = $controlPanel.querySelector('audio');
const $playButton = $controlPanel.querySelector('.track-control button:nth-child(2)');
const $playButtonImg = $playButton.querySelector('img');
const $volumeSlider = $controlPanel.querySelector('.volume-control input[type="range"]')
const $trackLengthSlider = $controlPanel.querySelector('.track-length-control input[type="range"]')
const $currentTime = $controlPanel.querySelector('.track-length-control .current-time');
const $trackLength = $controlPanel.querySelector('.track-length-control .track-length');


const initiateTrack = function(src) {
    $audioFile.src = src;
    $audioFile.addEventListener('canplay', function() {
        $trackLength.textContent = convertSecondsToMMSSFormat($audioFile.duration)
        updateVolume();
        if ($audioFile.paused) {
            togglePlay();
        } else {
            $audioFile.play();
            window.requestAnimationFrame(updateTrackProgress)
        }
    })
    
}

const togglePlay = function() {
    [$playButtonImg.src, $playButtonImg.dataset.altImg] = [$playButtonImg.dataset.altImg, $playButtonImg.src];   
    if ($audioFile.paused) {
        $audioFile.play();
        window.requestAnimationFrame(updateTrackProgress)
    } else {
        $audioFile.pause();
        window.cancelAnimationFrame(updateTrackProgress)
    } 
}

const updateTrackProgress = function() {
    $trackLengthSlider.value = $audioFile.currentTime / $audioFile.duration * 100;
    $currentTime.textContent = convertSecondsToMMSSFormat($audioFile.currentTime);
    if ($audioFile.currentTime < $audioFile.duration) {
        window.requestAnimationFrame(updateTrackProgress)
    } else {
        window.cancelAnimationFrame(updateTrackProgress)        
    }
}

const convertSecondsToMMSSFormat = function(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ':' + seconds
}

const updateVolume = function(percentage) {
    $audioFile.volume = $volumeSlider.value / 100;
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

$volumeSlider.addEventListener('input', updateVolume);

})();