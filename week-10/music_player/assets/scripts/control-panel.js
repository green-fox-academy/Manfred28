'use strict';
const controlPanel = function(Utilities) {    
    const $controlPanel = document.querySelector('.media-player .control-panel') 
    const $audioFile = $controlPanel.querySelector('audio');
    const $playButton = $controlPanel.querySelector('.track-control button:nth-child(2)');
    const $playButtonImg = $playButton.querySelector('img');
    const $rewind = $controlPanel.querySelector('.track-control button:nth-child(1)')
    const $forward = $controlPanel.querySelector('.track-control button:nth-child(3)')
    const $volumeSlider = $controlPanel.querySelector('.volume-control input[type="range"]')
    const $trackLengthSlider = $controlPanel.querySelector('.track-length-control input[type="range"]')
    const $currentTime = $controlPanel.querySelector('.track-length-control .current-time');
    const $trackLength = $controlPanel.querySelector('.track-length-control .track-length');

    const loadTrack = function(track) {
        $audioFile.src = track.path;
        $playButtonImg.src = $playButtonImg.dataset.playSrc;
        $audioFile.addEventListener('canplay', function() {
                resetTrackProgress();
                $trackLength.textContent = Utilities.secondsToMMSS($audioFile.duration)
                updateVolume();
        })
    }

    const togglePlay = function() {
        if ($audioFile.paused) {
            $audioFile.play();
            $playButtonImg.src = $playButtonImg.dataset.pauseSrc;
            window.requestAnimationFrame(updateTrackProgress);
        } else {
            $audioFile.pause();
            $playButtonImg.src = $playButtonImg.dataset.playSrc;            
            window.cancelAnimationFrame(updateTrackProgress);
        } 
    }

    const updateTrackProgress = function() {
        $trackLengthSlider.value = $audioFile.currentTime / $audioFile.duration * 100;
        $currentTime.textContent = Utilities.secondsToMMSS($audioFile.currentTime);
        if ($audioFile.currentTime < $audioFile.duration) {
            window.requestAnimationFrame(updateTrackProgress)
        } else {
            window.cancelAnimationFrame(updateTrackProgress)        
        }
    }

    const resetTrackProgress = function() {
        $trackLengthSlider.valueAsNumber = 0;
        $currentTime.textContent = '0:00';    
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

    
    const trackOver = function(callback) {
        $audioFile.addEventListener('ended', callback)
    }

    const rewindButtonOnClick = function(callback) {
        $rewind.addEventListener('click', callback)
    }
    
    const forwardButtonOnClick = function(callback) {
        $forward.addEventListener('click', callback)
    }

    $playButton.addEventListener('click', togglePlay);

    $trackLengthSlider.addEventListener('input', function() {
        $audioFile.currentTime = $audioFile.duration * (this.value / 100);
    })

    $volumeSlider.addEventListener('input', updateVolume);

    return {
        loadTrack,
        trackOver,
        rewindOnClick: rewindButtonOnClick,
        forwardOnClick: forwardButtonOnClick
    }
};