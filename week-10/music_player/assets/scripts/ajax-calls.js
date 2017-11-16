const ajaxCalls = function() {
    
    const ajaxCall = function(Config) {
        return new Promise(function(resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open(Config.method, Config.url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else if (xhr.readyState === 4 && xhr.status !== 200) {
                    reject(xhr.statusText);
                }
            } 
            xhr.send(JSON.stringify(Config.body));
        });
    }

    const getPlaylists = function() {
        return ajaxCall({
            method: 'GET',
            url: 'http://localhost:3000/playlists',
            body: ''
        });
    }

    const addPlaylist = function(title) {
        return ajaxCall({
            method: 'POST',
            url: 'http://localhost:3000/playlists',
            body: {playlist: title}
        });
    }

    const deletePlaylist = function(playlistId) {
        return ajaxCall({
            method: 'DELETE',
            url: `http://localhost:3000/playlists/${playlistId}`,
            body: {}
        });
    }

    const getTracks = function(playlistId) {
        let url = 'http://localhost:3000/playlist-tracks';
        url += playlistId === 'all' ? '' : `/${playlistId}`;
        return ajaxCall({
            method: 'GET',
            url: url,
            body: ''
        });
    }

    const addTrackToFavourites = function(trackId) {
        return ajaxCall({
            method: 'POST',
            url: `http://localhost:3000/playlists/1/${trackId}`,
            body: {}
        });
    }
    
    const deleteTrackFromFavourites = function(trackId) {
        return ajaxCall({
            method: 'DELETE',
            url: `http://localhost:3000/playlists/1/${trackId}`,
            body: {}
        });
    }

    const addTrackToPlaylist = function(playlistId, trackId) {
        return ajaxCall({
            method: 'POST',
            url: `http://localhost:3000/playlists/${playlistId}/${trackId}`,
            body: {}
        });
    }

    return {
        getPlaylists,
        addPlaylist,
        deletePlaylist,
        getTracks,
        addTrackToFavourites,
        deleteTrackFromFavourites,
        addTrackToPlaylist
    }
}