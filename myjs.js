titlesAndCovers = 
[
  {
    "title": "Kanye",
    "cover": "example.jpg"
  },
  {
    "title": "Eminem",
    "cover": "example.jpg"
  },
  {
    "title": "JavaScript: The Good Parts",
    "cover": "example.jpg"
  }
]


function createAlbum(title, cover){
  var album = document.createElement('div');
  album.classList.add('album');

  var img = document.createElement('img');
  img.src = cover;

  var p = document.createElement('p');
  p.textContent = title;

  album.appendChild(img);
  album.appendChild(p);
}

function titlePageAlbums(){
  var albumGrid = document.querySelector('.album-grid');

  titlePageAlbums.forEach(element => {
    createAlbum(element.title, element.cover);
    albumGrid.appendChild(album);
  });
}



document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector('#playBtn');
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
  