'use strict';

(function() {
    const ControlPanel = controlPanel();
    const TrackList = trackList();
    const CurrentSong = currentSong();
    const Utilities = utilities();
    const Playlists = playlists();
    
    const configGetTrack = {
        method: 'GET',
        url: 'http://localhost:3000/playlist-tracks'
    }

    const configGetPlaylists = {
        method: 'GET',
        url: 'http://localhost:3000/playlists'
    }

    Utilities.ajaxCall(configGetTrack).then((trackList) => {
        TrackList.getTracks(trackList);
        TrackList.trackOnClick(track => {
            ControlPanel.loadTrack(track);
            CurrentSong.updateSong(track);
        })
    })

    Utilities.ajaxCall(configGetPlaylists).then(Playlists.getPlaylists)
    

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