'use strict';

const mysql = require('mysql');

const conn = mysql.createConnection({
    user: 'root',
    password: 'root',
    database: 'music_player',
    host: 'localhost'
})

conn.connect(function(err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('MYSQL connection established');
})

const mysqlPromise = function(query) {
    return new Promise(function (resolve, reject) {
        conn.query(query, 
        function(err, results) {
            if (err) {
                 reject(err);
            } else{
                resolve(results);
            }
        })
    })
}

const getAllPlaylists = function() {
    return mysqlPromise(`
        SELECT * FROM playlists;    
    `)
}

const addPlaylist = function(title) {
    return mysqlPromise(`
        INSERT INTO playlists (title) 
        VALUES (${mysql.escape(title)})
    `)
}

const deletePlaylist = function(id) {
    return mysqlPromise(`
        DELETE FROM playlistTracks
        WHERE playlistID = ${mysql.escape(id)};`)
        .then(mysqlPromise(`
            DELETE FROM playlists 
            WHERE id = ${mysql.escape(id)};
        `))
       
}

const getAllTracks = function() {
    return mysqlPromise(`
        SELECT tracks.*,
        IF(playlisttracks.trackID IS NOT NULL AND 
        playlisttracks.playlistID = 1, TRUE, FALSE) as isFavourite
        FROM tracks
        LEFT JOIN playlisttracks ON playlisttracks.trackID = tracks.id
        GROUP BY tracks.id;
    `)
}

const getTracksFromPlaylist = function(id) {
    return mysqlPromise(`
        SELECT tracks.*,
        IF(playlisttracks.trackID IS NOT NULL AND 
        playlisttracks.playlistID = 1, TRUE, FALSE) as isFavourite
        FROM tracks
        LEFT JOIN playlisttracks ON playlisttracks.trackID = tracks.id 
        WHERE playlistID = ${mysql.escape(id)} AND 
        tracks.id = playlistTracks.trackID
        GROUP BY tracks.id;
    `)
}

const addTrackToPlaylist = function(playlistId, trackId) {
    return mysqlPromise(`
        INSERT INTO playlistTracks (playlistID, trackID) 
        VALUES ((SELECT id FROM playlists WHERE id = ${playlistId}), 
        (SELECT id FROM tracks WHERE id = ${trackId}));
    `)
}

const removeTrackFromPlaylist = function(playlistId, trackId) {
    return mysqlPromise(`
        DELETE FROM playlistTracks WHERE
        playlistID = ${playlistId} AND trackID = ${trackId}
    `)
}

module.exports = {
    getAllPlaylists,
    addPlaylist,
    deletePlaylist,
    getAllTracks,
    getTracksFromPlaylist,
    addTrackToPlaylist,
    removeTrackFromPlaylist
}
