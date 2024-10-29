document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector('.player-controls button:nth-child(2)');
    let isPlaying = false;
  
    playButton.addEventListener('click', function() {
      if (!isPlaying) {
        playButton.textContent = 'Pause';
        isPlaying = true;
        // Logic to play music can be added here
      } else {
        playButton.textContent = 'Play';
        isPlaying = false;
        // Logic to pause music can be added here
      }
    });
  });
  