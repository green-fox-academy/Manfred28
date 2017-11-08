const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/assets', express.static('assets'))
app.use(bodyParser.json())

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

app.get('/appenda/:appendable', function(req, res) {
    res.json({
        "appended": req.params.appendable + "a",
    }) 
});

const sum1 = function (num) {
    sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

const factorial1 = function (num) {
    console.log(num)
    if (num <= 1) {
        return 1;
    }
    return num * factorial1(num - 1)
}

app.post('/dountil/:operation', function(req, res) {
    if (req.params.operation == "sum") {
        res.json({
            result: sum1(req.body.until)
        })
    }
    else if (req.params.operation == "factor") {
        console.log("ay")
        res.json({
            result: factorial1(req.body.until)
        })
    }
    else {
        res.json({
            error: "noluckfren"
        })
    }
});

app.post('/arrays', function(req, res) {
    if (req.body.what == "sum") {
        res.json({
            result: req.body.numbers.reduce((acc, cur) => acc += cur, 0)
        })
    }
    else if (req.body.what == "multiply") {
        res.json({
            result: req.body.numbers.reduce((acc, cur) => acc *= cur, 1)
        })
    }
    else if (req.body.what == "double") {
        res.json({
            result: req.body.numbers.map((num) => num * 2)
        })
    }
    else if (!req.body.what || !req.body.numbers) {
        res.json({
            error: "Please provide what to do with the numbers!"
        })
    }
});

const insertRandomWords = function(sentence) {
    const randomWords =  [" Hm.", " Uhm.", " Err..", " Err"];
    const randomWordCount = Math.round(Math.random() * 5) + 1;
    const randomWordIndex = () => Math.round(Math.random() * (randomWords.length -1));
    for (let i=0; i < randomWordCount; i++) {
        sentence += randomWords[randomWordIndex()]
    }
    return sentence + " ";
}

const simplifiedYodaSpeak = function(stringOfWords) {
    if (stringOfWords[0] === " ") {
        stringOfWords = stringOfWords.substring(1);
    }
    let yodaSentence = stringOfWords.split(" ");
    yodaSentence[0] = yodaSentence[0].toLowerCase();
    for (let i = 0; i < yodaSentence.length; i += 2) {
        if (i + 1 !== yodaSentence.length) {
            [yodaSentence[i], yodaSentence[i + 1]] = [yodaSentence[i + 1], yodaSentence[i]]
        }
    }
    yodaSentence[0] = yodaSentence[0][0].toUpperCase() + yodaSentence[0].substring(1);    
    yodaSentence = yodaSentence.join(" ")
    return insertRandomWords(yodaSentence)
}

app.post('/sith', function(req, res) {
    if (req.body.text) {
        const inputSentence = req.body.text.split(".");
        inputSentence.splice(-1, 1);
        res.json({
            sith_text: inputSentence.map(simplifiedYodaSpeak).join("")
        })
    }
    else {
        res.json(
        {
            "sith_text": "Feed me some text you have to, padawan young you are. Hmmm."
        })
    }
})

app.listen(8080);



