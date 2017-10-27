'use strict';

const THUMBNAILS = document.querySelector(".thumbnails")
let THUMBNAIL_IMAGES = null
const MAIN_IMAGE = document.querySelector(".main-image-container > img")
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
    THUMBNAIL_IMAGES = Array.from(THUMBNAILS.children)
}

const setMainImage = function(index) {
    MAIN_IMAGE.setAttribute("src", images[index].src)  
    MAIN_IMAGE.setAttribute("alt", images[index].title)  
}

const addClickEventToThumbnailImages = function thumbnailClick () {
    THUMBNAIL_IMAGES.forEach(function(img, index) {
        img.addEventListener("click", function() {
            setMainImage(index)
        })
    })
} 

const onLoad = function() {
    setMainImage(0)
    addThumbnailImages()
    addClickEventToThumbnailImages()
}

onLoad()


