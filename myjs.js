const titlesAndCovers = [
  { "title": "Kanye", "cover": "minion.png" },
  { "title": "Eminem", "cover": "minion.png" },
  { "title": "Rhyana", "cover": "minion.png" },
  { "title": "JCole", "cover": "minion.png" },
  { "title": "2Pac", "cover": "minion.png" },
  { "title": "Mac Miller", "cover": "minion.png" }
];

const artists = [
  { "title": "Billea", "cover": "Billea.png" },
  { "title": "Calin", "cover": "Calin.png" },
  { "title": "David", "cover": "David.png" },
  { "title": "Gaga", "cover": "Gaga.png" },
  { "title": "Linking", "cover": "Linking.png" },
  { "title": "Sheen", "cover": "Sheen.png" },
];

const songs = [
  { "title": "Impostor syndrom", "cover": "song1.png" },
  { "title": "Sativa", "cover": "song2.png" },
  { "title": "Global", "cover": "song3.png" },
  { "title": "From Zero", "cover": "song4.png" },
  { "title": "Hit Me", "cover": "song5.png" },
  { "title": "Roadtrip", "cover": "song6.png" }
];

const imgDirectory = 'img/';
const imgArtistsDir = 'img/artists/';
const imgSongDir = 'img/songs/';
const gallDirectory = 'img/gallery/';

// Index page ------------------------------------------------
// Create artist div with an image and a title
function createArtist(title, cover) {
  var artist = document.createElement('div');
  artist.classList.add('album'); //artist

  var img = document.createElement('img');
  img.src = cover;
  img.alt = title;
  img.classList.add('img-fluid');

  var p = document.createElement('p');
  p.textContent = title;

  artist.appendChild(img);
  artist.appendChild(p);

  return artist;
}

function createArtistRow() {
  const artistSection = document.createElement('div');
  artistSection.classList.add('artist-section');

  const artistHeader = document.createElement('h2');
  artistHeader.textContent = 'Artists';
  artistHeader.classList.add('text-light');
  artistSection.appendChild(artistHeader);

  const artists_div = document.createElement('div');
  artists_div.classList.add('album-grid', 'text-light');

  artists.forEach(element => {
    const artist = createArtist(element.title, imgArtistsDir + element.cover);
    artists_div.appendChild(artist);
  });

  artistSection.appendChild(artists_div);
  document.getElementById('artists').appendChild(artistSection);
}

// Creates an album div with an image and a title
function createAlbum(title, cover) {
  var album = document.createElement('div');
  album.classList.add('album');

  var img = document.createElement('img');
  img.src = cover;
  img.alt = title;
  img.classList.add('img-fluid'); // Image styling from Bootstrap

  var p = document.createElement('p');
  p.textContent = title;

  album.appendChild(img);
  album.appendChild(p);

  return album;
}

// Creates all the album grids for the title page
function titlePageAlbums() {
  const albumSection = document.createElement('div');
  albumSection.classList.add('album-section');
  for (let i = 0; i < 4; i++) {
    const albumHeader = document.createElement('h2');
    albumHeader.textContent = 'Albums';
    albumHeader.classList.add('text-light');
    albumSection.appendChild(albumHeader);

    const albumGrid = document.createElement('div');
    albumGrid.classList.add('album-grid', 'text-light', 'text-center');

    songs.forEach(element => {
      const album = createAlbum(element.title, imgSongDir + element.cover);
      albumGrid.appendChild(album);
    });

    albumSection.appendChild(albumGrid);
    document.getElementById('albums').appendChild(albumSection);
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

function toggleSidebar() {
  const mainDiv = document.getElementsByTagName('body')[0].getElementsByTagName('div')[0];
  mainDiv.style.height = '100%';
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.createElement('div'); // Overlay to detect clicks outside
  overlay.id = 'sidebar-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = '999'; // Ensure it's above other elements
  overlay.style.display = sidebar.classList.contains('open') ? 'none' : 'block';
  
  sidebar.classList.toggle('open');
  
  if (sidebar.classList.contains('open')) {
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      document.body.removeChild(overlay);
    });
  } else if (document.getElementById('sidebar-overlay')) {
    document.body.removeChild(overlay);
  }
}


//CountDown page ------------------------------------------------
function countdown() {
  const countdownKey = "countdownStartTime";
  // const countdownDuration = 2 * 60 * 60 * 1000; // 2 hours
  const countdownDuration = 20 * 1000; // Testing 

  let startTime = localStorage.getItem(countdownKey);

  if (!startTime) {
    startTime = new Date().getTime();
    localStorage.setItem(countdownKey, startTime);
  } else {
    startTime = parseInt(startTime, 10); 
  }

  const endTime = startTime + countdownDuration;

  const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) {
      clearInterval(countdownInterval); // Stop the interval
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      document.getElementById("timeIsUp").innerText = "TIME'S UP!";
      localStorage.removeItem(countdownKey); // Clear stored start time
      return; // Exit the function early to prevent further updates
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
  }, 1000); // Update every second
}


// Gallery page ------------------------------------------------
// Creates a gallery image div with an image and a title
function createGalleryImage(title, cover) {
  var galleryImage = document.createElement('div');
  galleryImage.classList.add('gallery-image');

  var img = document.createElement('img');
  img.src = cover;
  img.alt = title;
  img.classList.add('img-fluid');

  var p = document.createElement('p');
  p.textContent = title;

  galleryImage.appendChild(img);
  galleryImage.appendChild(p);

  return galleryImage;
}

// Lightbox functionality
function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.getElementById('close-lightbox');

  // Open lightbox
  document.querySelectorAll('.gallery-image img').forEach(img => {
    img.addEventListener('click', function () {
      lightboxImg.src = img.src; // Set the image in the lightbox
      lightbox.style.display = 'flex'; // Show the lightbox
    });
  });

  // Close lightbox
  closeLightbox.addEventListener('click', function () {
    lightbox.style.display = 'none'; // Hide the lightbox
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
}

// Creates all the gallery images for the gallery page
function createGallery() {
  const gallery_div = document.getElementById('gallery-div');

  for (let i = 0; i < 4; i++) {
    titlesAndCovers.forEach(element => {
      var galleryImage = createGalleryImage(element.title, imgDirectory + element.cover);
      gallery_div.appendChild(galleryImage);
    });
  }
}

// Form page ------------------------------------------------

function setupForm() {
  const albumForm = document.getElementById("albumForm");
  const songForm = document.getElementById("songForm");

  // Handle album form submission
  albumForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    const albumTitle = document.getElementById("albumTitle").value.trim();
    const albumCover = document.getElementById("albumCover").value.trim();

    // Validate inputs
    if (!albumTitle || !albumCover) {
      alert("Please fill in all fields for the album.");
      return;
    }

    // Display the input under the form
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
      <p><strong>Album Title:</strong> ${albumTitle}</p>
      <p><strong>Album Cover:</strong> ${albumCover}</p>
    `;
    albumForm.appendChild(outputDiv);

    // Clear the form
    albumForm.reset();
  });

  songForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    const songName = document.getElementById("songName").value.trim();
    const songAlbum = document.getElementById("songAlbum").value.trim();
    const songInterpret = document.getElementById("songInterpret").value.trim();

    // Validate inputs
    if (!songName || !songAlbum || !songInterpret) {
      alert("Please fill in all fields for the song.");
      return;
    }

    // Display the input under the form
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `
      <p><strong>Song Name:</strong> ${songName}</p>
      <p><strong>Album:</strong> ${songAlbum}</p>
      <p><strong>Interpret:</strong> ${songInterpret}</p>
    `;
    songForm.appendChild(outputDiv);

    // Clear the form
    songForm.reset();
  });
}

//------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const path = window.location.pathname;

  if (path.includes('index.html') || path == '/') {
    const playButton = document.querySelector('#PlayBtn');
    let isPlaying = false;
    const mainContent = document.getElementById('main-content');
    
    createArtistRow();

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

    // Show scrollbar on scroll, then hide after 2 seconds of inactivity
    mainContent.addEventListener('scroll', function() {
      showScrollbar(mainContent);
      clearTimeout(mainContent.scrollTimeout); // Reset the timer
      mainContent.scrollTimeout = setTimeout(() => hideScrollbar(mainContent), 2000); // Hide after 2 seconds
    });

    // Initial call to hide the scrollbar on page load
    setTimeout(() => hideScrollbar(mainContent), 2000);
  }else if(path.includes('Form.html')) {
    setupForm();
  }else if(path.includes('CountDown.html')) {
    countdown();
  }else if (path.includes('Gallery.html')) {
    createGallery();
    setupLightbox();
  }else if(path.includes('Premium.html')){
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-prem");
    const overlay = document.getElementById("overlay");
  
    function toggleMenu() {
      const isOpen = navMenu.classList.toggle("open");
      overlay.classList.toggle("show", isOpen); // Show or hide overlay
    }
  
    function closeMenu() {
      navMenu.classList.remove("open");
      overlay.classList.remove("show");
    }
  
    // Open/close menu on hamburger click
    hamburgerMenu.addEventListener("click", toggleMenu);
  
    // Close menu when clicking outside the nav (on the overlay)
    overlay.addEventListener("click", closeMenu);
  }
});