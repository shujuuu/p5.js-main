// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Ported by Lauren McCarthy

// Example 10-10: The raindrop catching game

class Drop {
  constructor() {
    this.r = 8; // All raindrops are the same size
    this.x = random(width); // Start with a random x location
    this.y = -this.r * 4; // Start a little above the window
    this.speed = random(1, 5); // Speed of raindrop
    this.c = [50, 100, 150];
  }
  // Move the raindrop down
  move() {
    // Increment by speed
    this.y += this.speed;
  }
  // Check if it hits the bottom
  reachedBottom() {
    // If we go a little beyond the bottom
    if (this.y > height + this.r * 4) {
      return true;
    } else {
      return false;
    }
  }
  // Display the raindrop
  display() {
    // Display the drop
    fill(this.c);
    noStroke();
    for (var i = 2; i < this.r; i++) {
      ellipse(this.x, this.y + i * 4, i * 2, i * 2);
    }
  }
  // If the drop is caught
  caught() {
    // Stop it from moving by setting speed equal to zero
    this.speed = 0;
    // Set the location to somewhere way off-screen
    this.y = -1000;
  }
}
