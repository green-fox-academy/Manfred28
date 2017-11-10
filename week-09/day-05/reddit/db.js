const mysql = require('mysql');

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

const getPostInfo = function(id) {
    return new Promise(function (resolve, reject) {
        conn.query(`
        SELECT * FROM posts
        WHERE id = ${mysql.escape(id)}`, 
        function(err, results) {
            if (err) {
                 reject(err);
            } else{
                resolve(results);
            }
        })
    })
}

const getPostInfoAll = function() {
    return new Promise(function (resolve, reject) {
        conn.query(`
        SELECT * FROM posts`, 
        function(err, results) {
            if (err) {
                 reject(err);
            } else{
                resolve(results);
            }
        })
    })
}

const createNewPost = function(title, href) {
    return new Promise(function(resolve, reject){
        conn.query(`
            INSERT INTO posts (title, url, timestamp) VALUES (
            ${mysql.escape(title)}, 
            ${mysql.escape(href)}, 
            ${Date.now()})`, 
            function(err, results) {
                if (err) {
                    reject(err);
                } else {
                    resolve(results)
                }
            }
        )
    })
}

const changePostVote = function(vote, id) {
    let changeScoreBy = 0;
    if (vote === 'upvote') {
        changeScoreBy++;
    } else if (vote === 'downvote') {
        changeScoreBy--
    }
    return new Promise(function(resolve, reject) {
        conn.query(`
            UPDATE posts SET 
            score = score ${vote === 'upvote' ? '+1' : '-1'} 
            WHERE id = ${mysql.escape(id)}`, 
            function(err, results) {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
        })
    })
}

module.exports = {
    getPostInfo,
    getPostInfoAll,
    createNewPost,
    changePostVote
}