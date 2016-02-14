/*
 * Render engine
 * Dependancies: physics_engine
 */

// Animate the world
var animateWorld = function() {

  // Update physics
  updateRibbonPhysics(ribbon, actions);
  updateObstaclesPhysics(obstacles_list);

  // Check for collision
  spriteCollisionOccured(ribbon, obstacles_list);

  // Draw on canvas
  clearCanvas();
  animateSprite(ribbon);
  animateObstacles(obstacles_list);

  // recursive animation loop
  this.requestAnimationFrame(function() {
    animateWorld();
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
