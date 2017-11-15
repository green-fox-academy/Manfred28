'use strict';

(function() {
    const Utilities = utilities();
    const ControlPanel = controlPanel(Utilities);
    const TrackList = trackList(Utilities);
    const CurrentSong = currentSong();
    const Playlists = playlists(Utilities);
    

    const configGetPlaylists = {
        method: 'GET',
        url: 'http://localhost:3000/playlists'
    }

    TrackList.getOnClickAction((track) => {
        ControlPanel.loadTrack(track);
        CurrentSong.updateSong(track);
    })


    Utilities.ajaxCall(configGetPlaylists).then(playlists => {
        Playlists.getPlaylists(playlists);
        Playlists.playlistOnClickAction(TrackList.getTracklist);
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