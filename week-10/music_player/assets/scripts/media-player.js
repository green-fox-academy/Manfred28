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

    const getTracks = function(playlistId) {
        const config = {
            method: 'GET',
            url: 'http://localhost:3000/playlist-tracks'
        }
        if (playlistId !== 'all') {
            config.url += `/${playlistId}`
        }
        Utilities.ajaxCall(config).then((trackList) => {
            TrackList.parseTracklist(trackList);
            TrackList.trackOnClickAction(track => {
                ControlPanel.loadTrack(track);
                CurrentSong.updateSong(track);
            })
        })
    }


    Utilities.ajaxCall(configGetPlaylists).then(playlists => {
        Playlists.getPlaylists(playlists);
        Playlists.playlistOnClickAction(getTracks);
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