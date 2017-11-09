'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

app.use('/assets', express.static('assets'))

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bookstore'
})

dbConnection.connect(function(err, res) {
    if (err) {
        console.log(err);
    }
    console.log('connection established');
});


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

const parseQueryString = function(query) {
    let queryString = ""
    if (Object.keys(query).length !== 0) {
        queryString = 'WHERE'
        queryString += query.category ? ` cate_descrip = ${mysql.escape(query.category)} AND`: ''
        queryString += query.publisher ? ` pub_name = ${mysql.escape(query.publisher)} AND`: ''
        queryString += query.plt ? ` book_price < ${mysql.escape(query.plt)} AND`: ''
        queryString += query.pgt ? ` book_price > ${mysql.escape(query.pgt)} AND`: ''
    }
    if (queryString.endsWith("AND")) {
        queryString = queryString.substr(0, queryString.length - 4);
    }
    return queryString;
}

app.get('/bookstore', function(req, res) {
    let whereQuery = parseQueryString(req.query);
    dbConnection.query(`
        SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast
        LEFT JOIN category ON book_mast.cate_id = category.cate_id
        LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
        LEFT JOIN author ON book_mast.aut_id = author.aut_id
        ${whereQuery}
        `, 
        function(err,rows){
            if(err) {
                res.send(err.toString())
            }
            res.json({book_data: rows});
        }
    );
})

app.listen(3000);