'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use('/assets', express.static('assets'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'reddit'
});

conn.connect(function(err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('MYSQL connection established');
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/submit', function(req, res) {
    res.sendFile(__dirname + '/submit-post.html');
})

app.get('/posts', function(req, res) {
    conn.query('SELECT * FROM posts', function(err, results) {
        if (err) {
            res.send(err);
        } else{
            res.json({posts: results});
        }
    })
});

app.post('/posts', function(req, res) {
    conn.query(`
        INSERT INTO posts (title, url, timestamp) VALUES (
        ${mysql.escape(req.body['title'])}, 
        ${mysql.escape(req.body['href'])}, 
        ${Date.now()})
        `, 
        function(err, results) {
            console.log(err)
            console.log(results)
            if (err) {
                res.send(err);
            } else{
                res.json({posts: results});
            }
    })
});

app.listen(3000);
