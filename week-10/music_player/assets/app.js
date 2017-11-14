'use strict';

(function() {
    const ControlPanel = controlPanel();
    const TrackList = trackList();
    const CurrentSong = currentSong();
    
    TrackList.trackOnClick(track => {
        ControlPanel.loadTrack(track);
        CurrentSong.updateSong(track);
    });
    ControlPanel.forwardOnClick(() => {
        TrackList.nextTrack();
        ControlPanel.loadTrack(TrackList.getCurrentTrack());
        CurrentSong.updateSong(TrackList.getCurrentTrack());
    });
    ControlPanel.rewindOnClick(() => {
        TrackList.previousTrack();
        ControlPanel.loadTrack(TrackList.getCurrentTrack());
        CurrentSong.updateSong(TrackList.getCurrentTrack());
    });
    ControlPanel.trackOver(() => ControlPanel.loadTrack(TrackList.nextTrack()));
})();