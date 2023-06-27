class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameContainer = document.getElementById("game-container");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameScreen = document.getElementById("game-screen");
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "../images/bee.png"
    );

    this.height = 600;
    this.width = 1200;
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.flowers = [new Flower(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.isGameOver = false;
    this.intervalId = null;
  }
  start() {
    this.startScreen.style.display = "none";
    this.gameContainer.style.display = "flex";
    this.update();
  }
  update() {
    this.player.move();

    //OBSTACLES
    // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
      // If the player's collides with an obstacle
      if (this.player.didCollide(obstacle)) {
        // Remove the obstacle element from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Reduce player's lives by 1
        this.lives--;
        this.livesElement.innerText = this.lives;
        // Update the counter variable to account for the removed obstacle
        i--;
      } // If the obstacle is off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        // Increase the score by 1
        // this.score++;
        //this.scoreElement.innerText = this.score;
        // Remove the obstacle from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
      }
    }

// FLOWERS
// Check for collision and if a flower is still on the screen
for (let i = 0; i < this.flowers.length; i++) {
  const flower = this.flowers[i];
  flower.move();
  // If the player collides with a flower
  if (this.player.didCollide(flower)) {
    // Remove the flower element from the DOM
    flower.element.remove();
    // Remove flower object from the array
    this.flowers.splice(i, 1);
    // Increase the score by 1
    this.score++;
    this.scoreElement.innerText = this.score;
    // Update the counter variable to account for the removed flower
    i--;
  } // If the flower is off the screen (at the bottom)
  else if (flower.top > this.height) {
    // Remove the flower from the DOM
    flower.element.remove();
    // Remove flower object from the array
    this.flowers.splice(i, 1);
    // Update the counter variable to account for the removed flower
    i--;
  }
}

    // If the lives are 0, end the game
    if (this.lives === 0) {
      this.gameIsOver = true;
      this.endGame();
    }

    // Create a new obstacle based on a random probability
    // when there is no other obstacles on the screen
    if (this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  

      // Create a new obstacle based on a random probability
    // when there is no other obstacles on the screen
    if (this.flowers.length < 1) {
      this.flowers.push(new Flower(this.gameScreen));
    }
  }

  // Create a new method responsible for ending the game
  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());

    this.gameIsOver = true;

    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
  }

  // ...
}