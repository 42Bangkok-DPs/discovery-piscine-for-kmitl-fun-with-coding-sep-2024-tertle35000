document.addEventListener('DOMContentLoaded', function() {
    const balloon = document.getElementById('balloon');
    let balloonSize = 200; // Initial size of the balloon
    let colorIndex = 0;
    const colors = ['red', 'green', 'blue']; // Color sequence
  
    // Function to handle color cycling
    function cycleColor(forward = true) {
      colorIndex = forward ? (colorIndex + 1) % 3 : (colorIndex - 1 + 3) % 3;
      balloon.style.backgroundColor = colors[colorIndex];
    }
  
    // Function to reset the balloon when it explodes
    function resetBalloon() {
      balloonSize = 200;
      balloon.style.width = `${balloonSize}px`;
      balloon.style.height = `${balloonSize}px`;
      balloon.style.backgroundColor = 'red';
      colorIndex = 0;
    }
  
    // Handle click event (balloon grows)
    balloon.addEventListener('click', function() {
      balloonSize += 10;
      balloon.style.width = `${balloonSize}px`;
      balloon.style.height = `${balloonSize}px`;
      cycleColor();
  
      // Check if the balloon exceeds 420px and "explodes"
      if (balloonSize > 420) {
        resetBalloon();
      }
    });
  
    // Handle mouse leave event (balloon shrinks)
    balloon.addEventListener('mouseleave', function() {
      if (balloonSize > 200) {
        balloonSize -= 5;
        balloon.style.width = `${balloonSize}px`;
        balloon.style.height = `${balloonSize}px`;
        cycleColor(false);
      }
    });
  });
  