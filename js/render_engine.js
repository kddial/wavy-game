/*
 * Render engine
 * Dependancies: physics_engine
 */

// Animate the world
var animateWorld = function(frame) {

  // Create object on every OBSTACLE_PER_FRAMES frame
  if (frame % OBSTACLE_PER_FRAMES == 0) {
    console.log(frame % OBSTACLE_PER_FRAMES);
    createObstacle("CASIO");
    createObstacle("CASIO");
  }

  // Update physics
  updateRibbonPhysics(ribbon, actions);
  updateObstaclesPhysics(obstacles_list);

  // Check for collision
  if (spriteOutOfBounds(ribbon) || spriteCollisionOccured(ribbon, obstacles_list)) {

    console.log("game will reset soon");
    setTimeout(function(){
      resetGame();
      animateWorld(0);
    }, GAME_OVER_TIME);

    return false;
  }

  // Draw on canvas
  clearCanvas();
  animateSprite(ribbon);
  animateObstacles(obstacles_list);

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

