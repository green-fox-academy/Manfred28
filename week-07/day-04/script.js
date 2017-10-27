'use strict';

const THUMBNAILS = document.querySelector('.thumbnails');
let THUMBNAIL_IMAGES = null;
const MAIN_IMAGE = document.querySelector('.main-image-container > img');
const GALLERY_ARROW_BUTTON = Array.from(document.querySelectorAll('.main-image-container > button'));
let currentlyActiveImageIndex = 0;
const images = [
    {src: 'images/img1.jpg', title: 'Lion'},
    {src: 'images/img2.jpg', title: 'Grass'},
    {src: 'images/img3.jpg', title: 'MushroomMushroom'},
    {src: 'images/img4.jpg', title: 'The Bug'}
]


const createImageNode = function(src) {
    let img = document.createElement('img');
    img.setAttribute('src', src);
    return img;
}

const addThumbnailImages = function() {
    images.forEach((img) => 
        THUMBNAILS.appendChild(createImageNode(img.src)) 
    )
    THUMBNAIL_IMAGES = Array.from(THUMBNAILS.children);
}

const setMainImage = function(index) {
    MAIN_IMAGE.setAttribute('src', images[index].src)  ;
    MAIN_IMAGE.setAttribute('alt', images[index].title);
    THUMBNAIL_IMAGES[currentlyActiveImageIndex].classList.remove('active');
    THUMBNAIL_IMAGES[index].classList.add('active');
    currentlyActiveImageIndex = index;
}

const addClickEventToThumbnailImages = function thumbnailClick() {
    THUMBNAIL_IMAGES.forEach(function(img, index) {
        img.addEventListener('click', function() {
            setMainImage(index);
        })
    })
} 

const AddClickEventToArrowButtons = function galleryButtonClick() {
    GALLERY_ARROW_BUTTON.forEach(function(button) {
        button.addEventListener('click', function() {
            setMainImage( calculateNextActiveImageIndex( parseInt(button.value) ) )
        })
    })
}

const calculateNextActiveImageIndex = function(changedBy) {
    let newActiveImageIndex = currentlyActiveImageIndex + changedBy
    if (newActiveImageIndex < 0) {
        newActiveImageIndex = THUMBNAIL_IMAGES.length - 1;
    }
    else if (newActiveImageIndex > THUMBNAIL_IMAGES.length - 1) {
        newActiveImageIndex = 0;
    }
    return newActiveImageIndex
}

const onLoad = function() {
    addThumbnailImages()
    addClickEventToThumbnailImages()
    setMainImage(0)
    AddClickEventToArrowButtons()
}

onLoad()


