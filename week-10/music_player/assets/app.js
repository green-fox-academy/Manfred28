'use strict';

(function() {
    const ControlPanel = controlPanel();
    const TrackList = trackList();
    
    TrackList.trackOnClick(ControlPanel.loadTrack(true));

})();