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

const mysqlPromise = function(query) {
    return new Promise(function (resolve, reject) {
        conn.query(query, 
        function(err, results) {
            if (err) {
                 reject(err);
            } else{
                resolve(results);
            }
        })
    })
}

const getPostInfo = function(id) {
    return mysqlPromise(`
        SELECT * FROM posts
        WHERE id = ${mysql.escape(id)}`
    )
}

const getPostInfoAll = function() {
    return mysqlPromise(`SELECT * FROM posts`)
}

const createNewPost = function(title, href) {
    return mysqlPromise(`
        INSERT INTO posts (title, url, timestamp) VALUES (
        ${mysql.escape(title)}, 
        ${mysql.escape(href)}, 
        ${Date.now()})`)
}

const changePostVote = function(vote, id) {
    let changeScoreBy = '';
    if (vote === 'upvote') {
        changeScoreBy = '+1';
    } else if (vote === 'downvote') {
        changeScoreBy = '-1'
    }
    return mysqlPromise(`
        UPDATE posts SET 
        score = score ${changeScoreBy.toString()} 
        WHERE id = ${mysql.escape(id)}`
    )
}

const deletePost = function(id) {
    return mysqlPromise(`
        DELETE FROM posts
        WHERE id = ${mysql.escape(id)}`
    )
}

module.exports = {
    getPostInfo,
    getPostInfoAll,
    createNewPost,
    changePostVote,
    deletePost
}