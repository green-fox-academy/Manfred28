'use strict';

const getTimeSincePost = function(timestamp) {
    const secondsPassed = Date.now() - timestamp;
    if (Math.floor(secondsPassed / 60 / 60 / 24)) {
        return Math.floor(secondsPassed / 60 / 60 / 24) + " day(s)"
    } else if (Math.floor(secondsPassed / 60 / 60)) {
        return Math.floor(secondsPassed / 60 / 60) + " minute(s)"        
    } else {
        return Math.floor(secondsPassed / 60) + " second(s)"                
    }
}

const createPosts = function(postData){
    const $postContainer = document.querySelector('main > article')    
    postData.forEach(function(postData) {
        const $post = document.createElement('section');
        $post.innerHTML = `
            <section class="rating">${postData.score}</section>
            <div>
                <h2><a href="${postData.url}">${postData.title}</a></h2>
                <section class="post-info">
                    submitted ${getTimeSincePost(postData.timestamp)} ago by ${postData.user ? postData.user : 'Anonymus'}
                </section>
                <section class="post-actions">
                    <a href="_blank">Modify</a>
                    <a href="_blank">Remove</a>
                </section>
            </div>
        `
        $post.setAttribute('class', 'post');
        $postContainer.appendChild($post);
    })
}



const ajaxRequest = function(url, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText).posts
            console.log(data);
            createPosts(data);
        }
    }
    request.send();
}

ajaxRequest('http://secure-reddit.herokuapp.com/simple/posts', createPosts);

