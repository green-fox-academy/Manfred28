'use strict';

(function() {
    const ControlPanel = controlPanel();
    const TrackList = trackList();
    const CurrentSong = currentSong();
    const Utilities = utilities();
    
    const configGetTrack = {
        method: 'GET',
        url: 'http://localhost:3000/playlist-tracks'
    }

    Utilities.ajaxCall(configGetTrack).then((trackList) => {
        TrackList.getTracks(trackList);
        TrackList.trackOnClick(track => {
            ControlPanel.loadTrack(track);
            CurrentSong.updateSong(track);
        })
    })

    

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