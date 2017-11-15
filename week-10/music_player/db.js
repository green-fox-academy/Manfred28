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
        DELETE FROM playlists 
        WHERE id = ${mysql.escape(id)}
    `)
}

const getAllTracks = function() {
    return mysqlPromise(`
        SELECT * FROM tracks;    
    `)
}

const getTracksFromPlaylist = function(id) {
    return mysqlPromise(`
        SELECT * FROM tracks 
        JOIN playlistTracks ON tracks.id = playlistTracks.trackID
        WHERE playlistID = ${mysql.escape(id)} AND 
        tracks.id = playlistTracks.trackID;
    `)
}

const addTrackToPlaylist = function(playlistId, trackId) {
    return mysqlPromise(`
        INSERT INTO playlistTracks (playlistID, trackID) 
        VALUES ((SELECT id FROM playlists WHERE id = ${playlistId}), 
        (SELECT id FROM tracks WHERE id = ${trackId}));
    `)
}

module.exports = {
    getAllPlaylists,
    addPlaylist,
    deletePlaylist,
    getAllTracks,
    getTracksFromPlaylist,
    addTrackToPlaylist
}
