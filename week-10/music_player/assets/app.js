'use strict';

(function() {
    const ControlPanel = controlPanel();
    const TrackList = trackList();
    
    TrackList.trackOnClick(ControlPanel.loadTrack);
    ControlPanel.forwardOnClick(() => ControlPanel.loadTrack(TrackList.nextTrack()));
    ControlPanel.rewindOnClick(() => ControlPanel.loadTrack(TrackList.previousTrack()));

})();