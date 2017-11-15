'use strict';

(function() {
    const Utilities = utilities();
    const ControlPanel = controlPanel(Utilities);
    const TrackList = trackList(Utilities);
    const CurrentSong = currentSong(Utilities);
    const Playlists = playlists(Utilities);


    TrackList.getOnClickAction((track) => {
        ControlPanel.loadTrack(track);
        CurrentSong.updateSong(track);
    })

    Playlists.getOnClickAction(TrackList.getTracklist);
    Playlists.getPlaylists();

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