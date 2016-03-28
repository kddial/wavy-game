/*
 * Render engine
 * Dependancies: physics_engine
 */

// Animate the world
var animateWorld = function(frame) {

  // Create object on every OBSTACLE_PER_FRAMES frame
  if (frame % OBSTACLE_PER_FRAMES == 0) {
    createObstacle("CASIO");

    if (obstacles_list.length > MAX_NUMBER_OF_OBSTACLES) {
      removeFirstObstacle();
    }

  }

  // Update physics
  updateRibbonPhysics(ribbon, actions_state);
  updateObstaclesPhysics(obstacles_list);

  // Check for collision
  if (spriteOutOfBounds(ribbon) || spriteCollisionOccured(ribbon, obstacles_list)) {

    gameOver(frame);

    return false;
  }

  // Draw on canvas
  clearCanvas();
  animateSprite(ribbon);
  animateObstacles(obstacles_list);

  // Continously display score
  displayScore(frame);

  // recursive animation loop
  this.requestAnimationFrame(function() {
    // increment frame number
    animateWorld(frame + 1);
  } );
}



// Clear canvas and draw background
var clearCanvas = function() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
}

// Render sprite per frame
var animateSprite = function(sprite) {
  ctx.drawImage(sprite.getImg(), sprite.getPosX(), sprite.getPosY());
};

// Render obstacles per frame
var animateObstacles = function(obstacles_list) {
  for (var i in obstacles_list) {
    var obs = obstacles_list[i];
    ctx.drawImage(obs.getImg(), obs.getPosX(), obs.getPosY());
  }
};


// Reset game by reseting sprite position and clearing obstacle list
var resetGame = function() {

  // garbage collector will delete previous objects (hopefully)
  obstacles_list = [];
  resetRibbon();
}

// Actions to do once collision occurs
var gameOver = function(frame) {

  // set top score
  frameScore = getScoreRoundedByFactor(frame);
  var topScoreDiv = document.getElementById('topScore');
  var topScoreVal = Number(topScoreDiv.innerHTML);
  if (frameScore > topScoreVal) {
    topScoreDiv.innerHTML = frameScore;
  }

  // change state to game over
  resetGame();
  game_state = GAME_OVER_S;

}

var displayScore = function(frame) {
  // display score
  frameScore = getScoreRoundedByFactor(frame);
  var scoreDiv = document.getElementById('score');
  scoreDiv.innerHTML = frameScore;
}
