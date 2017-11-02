'use strict';



const getGifData = function() {
    if (httpRequest.readyState === 4) {
        const gifData = JSON.parse(httpRequest.responseText).data
        gifData.forEach(createGifThumbnail)
    }
}

const eventListenerToThumbnail = function(gif) {
    gif.addEventListener('click', function() {
        [this.dataset.current, this.dataset.alt] = [this.dataset.alt, this.dataset.current]
        let img = new Image();
        img.onload = function() {
            gif.style.backgroundImage = `url(${img.src})`    
        }
        img.src = this.dataset.current
    })
}

const createGifThumbnail = function(gifData) {
    const gif = document.createElement('img')
    gif.dataset.current = gifData.images.fixed_height_still.url
    gif.dataset.alt = gifData.images.fixed_height.url
    gif.style.backgroundImage = `url(${gif.dataset.current})`
    console.log(gif)
    document.body.appendChild(gif)
    eventListenerToThumbnail(gif)
}


const httpRequest = new XMLHttpRequest()
httpRequest.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=QGvsJj9v21jWRKPBsRPWGsyrtmrGzQao&q=cat&limit=16&offset=0&rating=G&lang=en')
httpRequest.send();
httpRequest.onreadystatechange = getGifData;
