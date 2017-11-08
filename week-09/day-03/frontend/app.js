const express = require('express');
const app = express();

app.use('/assets', express.static('assets'))
express.json.type = "application/json";

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');  
});

app.get('/doubling', function(req, res) {
    if (req.query.input) {
        res.json({
            "received": req.query.input,
            "result": req.query.input * 2
        })
    }
    else {
        res.json({
            "error": "Please provide an input!"
        })
    }   
});

app.get('/greeter', function(req, res) {
    if (req.query.name && req.query.title) {
        res.json({
            "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
        })
    } else if (!req.query.name) {
        res.json({
            "error": "Please provide a name!"
        })
    } else if (!req.query.title) {
        res.json({
            "error": "Please provide a title!"
        })
    }   

});

app.listen(8080);



