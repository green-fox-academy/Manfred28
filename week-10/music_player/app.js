'use strict';

const express = require('express');
const app = express();

app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname +  '/index.html')
});

app.get('/playlist-tracks', function(req, res) {
    const data = [
        { "id": 21, "title": "Never Give Up", "artist": "Ars Sonor", "duration": 545, "path": "assets/music/Ars_Sonor_-_02_-_Never_Give_Up.mp3" },
        { "id": 412, "title": "Doctor Talos Answers The Door", "artist": "Doctor Turtle", "duration": 312.12, "path": "assets/music/Doctor_Turtle_-_Doctor_Talos_Answers_The_Door.mp3" }
    ]
    res.json(data)
})


app.listen(3000);