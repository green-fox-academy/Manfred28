'use strict';
const controlPanel = function() {
    
    const $controlPanel = document.querySelector('.media-player .control-panel') 
    const $audioFile = $controlPanel.querySelector('audio');
    const $playButton = $controlPanel.querySelector('.track-control button:nth-child(2)');
    const $playButtonImg = $playButton.querySelector('img');
    const $volumeSlider = $controlPanel.querySelector('.volume-control input[type="range"]')
    const $trackLengthSlider = $controlPanel.querySelector('.track-length-control input[type="range"]')
    const $currentTime = $controlPanel.querySelector('.track-length-control .current-time');
    const $trackLength = $controlPanel.querySelector('.track-length-control .track-length');


    const loadTrack = function(start = false) {
        return function(track) {
            $audioFile.src = track.url;
            $playButtonImg.src = $playButtonImg.dataset.playSrc;
            resetTrackProgress();
            $audioFile.addEventListener('canplay', function() {
                $trackLength.textContent = convertSecondsToMMSSFormat($audioFile.duration)
                updateVolume();
                if (start) {
                    $audioFile.play();
                    window.requestAnimationFrame(updateTrackProgress);
                } 
            })
        }
    }

    const togglePlay = function() {
        if ($audioFile.paused) {
            $audioFile.play();
            $playButtonImg.src = $playButtonImg.dataset.playSrc;
            window.requestAnimationFrame(updateTrackProgress);
        } else {
            $audioFile.pause();
            $playButtonImg.src = $playButtonImg.dataset.pauseSrc;            
            window.cancelAnimationFrame(updateTrackProgress);
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

    const resetTrackProgress = function() {
        $trackLengthSlider.value = 0;
        $currentTime.textContent = '0:00';    
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

    return {
        loadTrack: loadTrack,
    }

};