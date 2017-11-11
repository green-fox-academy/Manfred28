'use strict';


const getTimeSincePost = function(timestamp) {
    const gmt2Offset = 3600 * 1
    const secondsPassed = Math.floor((Date.now() + gmt2Offset - timestamp) / 1000) + gmt2Offset;
    if (Math.floor(secondsPassed / 60 / 60 / 24) > 0) {
        return Math.floor(secondsPassed / 60 / 60 / 24) + " day(s)"
    } else if (Math.floor(secondsPassed / 60 / 60) > 0) {
        return Math.floor(secondsPassed / 60 / 60) + " hour(s)"        
    } else if (Math.floor(secondsPassed / 60)) {
        return Math.floor(secondsPassed / 60) + " minute(s)"                
    } else {
        return secondsPassed + " second(s)"
    }
}

const voteCallback = function ($button, vote) {
    $button.querySelector('img').src=`assets/images/${vote}d.png`
    return function(postData) {
        console.log(postData)
        postData = JSON.parse(postData);
        $button.parentNode.querySelector('span').textContent = postData[0].score;
    }
}

const addVoteEventListener = function(button, postId, vote) {
    button.addEventListener('click', function() {
        ajaxRequest({
            url: `http://localhost:3000/posts/${postId}/${vote}`,
            method: 'PUT',
            callback: voteCallback(this, vote),
            data: null
        });
    })
}

const addPostRemoveEventListener = function($link, $post, postId) {
    $link.addEventListener('click', function() {
        ajaxRequest({
            url: `http://localhost:3000/posts/${postId}/delete`,
            method: 'PUT',
            callback: () => $post.remove(),
            data: null
        });
    })
}

const createPosts = function(postData){
    postData = JSON.parse(postData).posts
    const $postContainer = document.querySelector('main > article')    
    postData.forEach(function(postData) {
        const $post = document.createElement('section');
        $post.innerHTML = `
            <section class="rating">
                <button><img src="assets/images/upvote.png"/></button>
                <span>${postData.score}</span>
                <button><img src="assets/images/downvote.png"/></button>
            </section>
            <div>
                <h2><a href="${postData.url}">${postData.title}</a></h2>
                <section class="post-info">
                    submitted ${getTimeSincePost(postData.timestamp)} ago by ${postData.user ? postData.user : 'Anonymus'}
                </section>
                <section class="post-actions">
                    <a href="">Modify</a>
                    <a href="">Remove</a>
                </section>
            </div>
        `
        const $voteButtons = $post.querySelectorAll('.rating button');
        addVoteEventListener($voteButtons[0], postData.id, 'upvote')
        addVoteEventListener($voteButtons[1], postData.id, 'downvote')
        const $removeLink = $post.querySelectorAll('.post-actions > a')[1];
        addPostRemoveEventListener($removeLink, $post, postData.id);
        $post.setAttribute('class', 'post');
        $postContainer.appendChild($post);
    })
}

const getPostsConfig = {
    url: 'http://localhost:3000/posts',
    method: 'GET',
    callback: createPosts,
    data: null
}

ajaxRequest(getPostsConfig);

