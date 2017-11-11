'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js')

const app = express();
app.use('/assets', express.static('assets'))
app.use(bodyParser.json())



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/submit', function(req, res) {
    res.sendFile(__dirname + '/submit-post.html');
})

app.get('/posts', function(req, res) {
    db.getPostInfoAll()
        .then(result => res.json({posts: result}))
    });

app.post('/posts', function(req, res) {
    if (!req.body['title']) {
        res.send('Post title expected');
        return;
    }
    db.createNewPost(req.body['title'], req.body['href'])
        .then((result) => res.json({id: result.insertId}));
});

// In it's current form delete must be called before vote,
// Otherwise vote will be called in all cases
app.put('/posts/:postId/delete', function(req, res) {
    db.deletePost(req.params.postId)
        .then(result => res.json(result))
})

app.put('/posts/:postId/:vote', function(req, res) {
    db.changePostVote(req.params.vote, req.params.postId)
        .then(db.getPostInfo(req.params.postId)
            .then((result) => res.json(result))
        )
        .catch((e) => console.log(e))
})


app.listen(3000);
