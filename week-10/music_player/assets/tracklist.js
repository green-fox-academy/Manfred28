'use strict';


const ControlPanel = controlPanel();
const $tracklist = document.querySelector('.track-list ol');
console.log($tracklist);
    
const tracks = [
    {
    title: 'ayy',
    url: 'file:///C:/GreenFox/Manfred28/week-10/music_player/assets/music/test.mp3',
    length: '120'
},
{
    title: 'party',
    url: 'file:///C:/GreenFox/Manfred28/week-10/music_player/assets/music/test.mp3',
    length: '150'
},
{
    title: 'hey',
    url: 'file:///C:/GreenFox/Manfred28/week-10/music_player/assets/music/test.mp3',
    length: '100'
}
]

tracks.forEach(function(elem, i) {
    const $li = document.createElement('li');
    $li.innerHTML = `<span class="index">${i+1}</span>
                    ${elem.title}
                    <span class="track-length">${elem.length}</span>`
    $tracklist.appendChild($li);
})

ControlPanel.loadTrack(tracks[0].url)
