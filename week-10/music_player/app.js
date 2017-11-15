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
    db.getAllTracks().then(data => res.json(data));
})

app.get('/playlist-tracks/:id', function(req, res) {
    db.getTracksFromPlaylist(req.params.id).then(data => res.json(data));
})

app.get('/playlists', function(req, res) {
    db.getAllPlaylists().then(data => res.json(data));  
})

app.post('/playlists', function(req, res) {
    db.addPlaylist(req.body.playlist).then(res.send({}));
})


app.listen(3000);