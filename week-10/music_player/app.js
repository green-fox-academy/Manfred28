'use strict';

const express = require('express');
const db = require('./db.js')
const bodyParser = require('body-parser')

const app = express();
app.use('/assets', express.static('assets'));
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.sendFile(__dirname +  '/index.html')
});

app.get('/playlist-tracks', function(req, res) {
    db.getAllTracks()
        .then(data => res.json(data))
        .catch(e => {
            console.log(e);
            res.status(500).send(e.code)
        });
    }
)

app.get('/playlist-tracks/:id', function(req, res) {
    db.getTracksFromPlaylist(req.params.id)
        .then(data => res.json(data))
        .catch(e => {
            console.log(e);
            res.status(500).send(e.code)
        });
    }
)

app.get('/playlists', function(req, res) {
    db.getAllPlaylists()
        .then(data => res.json(data))
        .catch(e => {
            console.log(e);
            res.status(500).send(e.code)
        });  
    }
)

app.post('/playlists', function(req, res) {
    if (!req.body.playlist) {
        res.status(500).send('Title can\'t be empty');
    } else {
        db.addPlaylist(req.body.playlist)
            .then((result) => res.send(result))
            .catch(e => {
                console.log(e);
                res.status(500).send(e.code)
            });
        }
    }
)

app.delete('/playlists/:id', function(req, res) {
    db.deletePlaylist(req.params.id)
        .then((result) => res.send(result))
        .catch(e => {
            console.log(e);
            res.status(500).send(e.code)
        });
    }
)

app.post('/playlists/:playlistId/:trackId', function(req, res) {
    db.addTrackToPlaylist(req.params.playlistId, req.params.trackId).then((result) => res.send(result))
    .catch(e => {
        if (e.code === 'ER_DUP_ENTRY') {
            res.status(500).send('Track is already in playlist');
        } else {
            console.log(e);
            res.status(500).send('Something went wrong.');
        }        
    });
})

app.delete('/playlists/:playlistId/:trackId', function(req, res) {
    db.removeTrackFromPlaylist(req.params.playlistId, req.params.trackId)
        .then((result) => res.send(result))
        .catch(e => {
            console.log(e);
            res.status(500).send(e.code)
        });
    }
)

app.listen(3000);