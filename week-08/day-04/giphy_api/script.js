'use strict';



const getGifData = function() {
    if (httpRequest.readyState === 4) {
        const gifData = JSON.parse(httpRequest.responseText).data
        gifData.forEach(createGifThumbnail)
    }
}

const eventListenerToThumbnail = function(elem, gifData) {
    console.log(elem)
    elem.addEventListener('click', function() {
        const gifNode = this.cloneNode(true)
        gifNode.setAttribute('src', gifData.embed_url)
        this.parentNode.replaceChild(gifNode, this)
    })
}

const createGifThumbnail = function(gifData) {
    const elem = document.createElement('embed')
    elem.setAttribute('src', gifData.images.fixed_height_still.url)
    document.body.appendChild(elem)
    eventListenerToThumbnail(elem, gifData)
}


const httpRequest = new XMLHttpRequest()
httpRequest.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=QGvsJj9v21jWRKPBsRPWGsyrtmrGzQao&q=cat&limit=16&offset=0&rating=G&lang=en')
httpRequest.send();
httpRequest.onreadystatechange = getGifData;
