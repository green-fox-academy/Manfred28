'use strict';



const getGifData = function() {
    if (httpRequest.readyState === 4) {
        const gifData = JSON.parse(httpRequest.responseText).data
        gifData.forEach(createGifThumbnail)
    }
}

const eventListenerToThumbnail = function(gif) {
    gif.addEventListener('click', function() {
        const temp = this.getAttribute('data-alt')
        this.setAttribute('data-alt', this.src)
        this.setAttribute('src', temp)
    })
}

const createGifThumbnail = function(gifData) {
    const gif = document.createElement('img')
    gif.setAttribute('src', gifData.images.fixed_height_still.url)
    gif.setAttribute('data-alt', gifData.images.fixed_height.url)
    document.body.appendChild(gif)
    eventListenerToThumbnail(gif)
}


const httpRequest = new XMLHttpRequest()
httpRequest.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=QGvsJj9v21jWRKPBsRPWGsyrtmrGzQao&q=cat&limit=16&offset=0&rating=G&lang=en')
httpRequest.send();
httpRequest.onreadystatechange = getGifData;
