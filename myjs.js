const titlesAndCovers = [
  { "title": "Kanye", "cover": "minion.png" },
  { "title": "Eminem", "cover": "minion.png" },
  { "title": "JavaScript: The Good Parts", "cover": "minion.png" },
  { "title": "JavaScript: The Good Parts", "cover": "minion.png" },
  { "title": "JavaScript: The Good Parts", "cover": "minion.png" }
];

const imgDirectory = 'img/';

// Creates an album div with an image and a title
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

// Creates all the album grids for the title page
function titlePageAlbums() {
  for (let i = 0; i < 4; i++) {
    var albumGrid = document.createElement('div');
    albumGrid.classList.add('album-grid', 'text-light');

    titlesAndCovers.forEach(element => {
      var album = createAlbum(element.title, imgDirectory + element.cover);
      albumGrid.appendChild(album);
    });

    // Append this album grid to the main content area
    document.getElementById('main-content').appendChild(albumGrid);
  }
}

// Function to hide scrollbar
function hideScrollbar(mainContent) {
  mainContent.classList.add('hide-scrollbar');
}

// Function to show scrollbar
function showScrollbar(mainContent) {
  mainContent.classList.remove('hide-scrollbar');
}

//------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const path = window.location.pathname;

  if (path.includes('index.html')) {
    const playButton = document.querySelector('#PlayBtn');
    let isPlaying = false;
    const mainContent = document.getElementById('main-content');
    
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

    // Show scrollbar on scroll, then hide after 4 seconds of inactivity
    mainContent.addEventListener('scroll', function() {
      showScrollbar(mainContent);
      clearTimeout(mainContent.scrollTimeout); // Reset the timer
      mainContent.scrollTimeout = setTimeout(() => hideScrollbar(mainContent), 2000); // Hide after 4 seconds
    });

    // Initial call to hide the scrollbar on page load
    setTimeout(() => hideScrollbar(mainContent), 2000);
  }else if(path.includes('Form.html')) {
    // Code for Form page
  }else if(path.includes('CountDown.html')) {
    // Code for About page
  }
});