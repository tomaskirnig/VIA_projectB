const titlesAndCovers = [
  {
    "title": "Kanye",
    "cover": "minion.png"
  },
  {
    "title": "Eminem",
    "cover": "minion.png"
  },
  {
    "title": "JavaScript: The Good Parts",
    "cover": "minion.png"
  }
];

const imgDirectory = 'img/';

function createAlbum(title, cover) {
  var album = document.createElement('div');
  album.classList.add('album');

  var img = document.createElement('img');
  img.src = cover;
  img.alt = title;
  img.classList.add('img-fluid'); // Ensures image styling from Bootstrap

  var p = document.createElement('p');
  p.textContent = title;

  album.appendChild(img);
  album.appendChild(p);

  return album;
}

function titlePageAlbums() {
  var albumGrid = document.querySelector('.album-grid');

  titlesAndCovers.forEach(element => {
    var album = createAlbum(element.title, imgDirectory + element.cover);
    albumGrid.appendChild(album);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const playButton = document.querySelector('#PlayBtn'); // Matches the Play button
  let isPlaying = false;
  titlePageAlbums();
  
  playButton.addEventListener('click', function() {
    if (!isPlaying) {
      playButton.textContent = 'Pause';
      isPlaying = true;
      // Code to play music
    } else {
      playButton.textContent = 'Play';
      isPlaying = false;
      // Code to pause music
    }
  });
});