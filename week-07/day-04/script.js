'use strict';

const THUMBNAILS = document.querySelector(".thumbnails")
const images = [
    {src: 'images/img1.jpg', title: 'Lion'},
    {src: 'images/img2.jpg', title: 'Grass'},
    {src: 'images/img3.jpg', title: 'MushroomMushroom'},
    {src: 'images/img4.jpg', title: 'The Bug'}
]


const createImageNode = function(src) {
    let img = document.createElement('img');
    img.setAttribute('src', src);
    return img
}

const addThumbnailImages = function() {
    images.forEach((img) => 
        THUMBNAILS.appendChild(createImageNode(img.src)) 
    )
}

const onLoad = function() {
    addThumbnailImages()
}

onLoad()



