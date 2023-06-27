window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const gameScreen = document.getElementById("game-screen");
  const game = new Game();

  window.addEventListener("keydown", (e) => {
    handleKeyDown(e);
  });
  window.addEventListener("keyup", (e) => {
    game.player.directionX = 0;
    game.player.directionY = 0;
  });

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", (e) => {
    location.reload();
  });

  function handleKeyDown(event) {
    let key = event.code;
    let possibleKeys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];
    if (possibleKeys.includes(key)) {
      if (key === "ArrowLeft") {
        game.player.directionX = -7;
      } else if (key === "ArrowRight") {
        game.player.directionX = 7;
      } else if (key === "ArrowUp") {
        game.player.directionY = -7;
      } else {
        game.player.directionY = 7;
      }
    }
    game.update();
  }
  function startGame() {
    console.log("start game");
    gameScreen.style.display = "block";
    gameScreen.style.width = game.width.toString() + "px";
    gameScreen.style.height = game.height.toString() + "px";
    gameScreen.style.border = "1px solid black";
    game.start();
    animation();
  }

  const animation = () => {
    if (!game.isGameOver) {
      game.intervalId = requestAnimationFrame(animation);
      game.update();
    } else {
      cancelAnimationFrame(game.intervalId);
    }
  };
};