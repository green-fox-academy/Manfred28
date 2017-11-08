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

app.listen(8080);



