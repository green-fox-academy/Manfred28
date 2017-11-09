'use strict';

const mysql = require('mysql');
const fs = require('fs');


const insertUserInfo = function(data) {
    data.forEach(function(row) {
        connection.query('INSERT INTO User SET ?', row, (err) => console.log(err))
    });
}

const usersCSV = () => fs.readFile(__dirname + '/users.csv', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
        return
    }
    data = data.split("\n").map(elem => elem.split(',')).map(elem => {
        return ({
            id: elem[0],
            prefix: elem[1],
            first_name: elem[2],
            last_name: elem[3],
            address: elem[4],
            height: elem[5],
            bitcoin_address: elem[6],
            color_preference: elem[7]
        })
    })
    insertUserInfo(data);
})


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'user'
})

connection.connect(function(err, res) {
    if (err) {
        console.log(err);
    }
    console.log('connection established');
    usersCSV();
})



