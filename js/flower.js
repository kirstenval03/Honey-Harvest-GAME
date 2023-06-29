class Flower {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = Math.floor(Math.random() * 500 + 70);
      this.top = -150;
      this.width = 100;
      this.height = 150;
      this.element = document.createElement("img");
      this.element.src = "./images/flower.png";
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.gameScreen.appendChild(this.element);
    }
    updatePosition() {
      // Update the flower's position based on the properties left and top
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      // Move the flower down by 3px
      this.top += 3;
      // Update the flower's position on the screen
      this.updatePosition();
    }
  }