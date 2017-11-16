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

    ControlPanel.getChangeTrackCallback((direction) => {
        if (direction = "forward") {
            TrackList.nextTrack();
            ControlPanel.loadTrack(TrackList.getCurrentTrack());
            CurrentSong.updateSong(TrackList.getCurrentTrack());
        } else if (direction = "backward") {
            TrackList.previousTrack();
            ControlPanel.loadTrack(TrackList.getCurrentTrack());
            CurrentSong.updateSong(TrackList.getCurrentTrack());
        }
    });

    ControlPanel.shuffleOnClick(TrackList.shuffleTracks)

})();