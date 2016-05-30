/*
 * Control the velocity of the ribbon
 */


// Render sprite per frame based on action states
var updateRibbonPhysics = function(sprite, actions_state) {

  // set velocity
  if (actions_state["jump"]) {
    sprite.incVelY(jump_dist);
  } else {
    // neutral state (free falling)
    sprite.incVelY(gravity);
  }

  // calculate and set position based on velocity
  sprite.incPosY(sprite.getVelY());

  // Post velocity calculation
  // after making a jump, the sprite should start falling down due to
  // gravity. thus we need to set the velocity to zero.
  // might be used for max speed
  if (actions_state["jump"]) {
    // sprite.resetVelocity();
  }

};

// Render sprite per frame based on action states
var updateObstaclesPhysics = function(obstacles_list) {

  for (var i in obstacles_list) {
    var obs = obstacles_list[i];
    // only update x position of obstacales
    obs.incPosX(obs.getVelX());
    obs.incPosY(obs.getVelY());
  }

};


// Return boolean if a collision occured between two entities
var collisionOccured = function(entity1, entity2) {
  if (entity1.getPosX() < entity2.getPosX() + entity2.getWidth() &&
    entity1.getPosX() + entity1.getWidth() > entity2.getPosX() &&
    entity1.getPosY() < entity2.getPosY() + entity2.getHeight() &&
    entity1.getHeight() + entity1.getPosY() > entity2.getPosY()) {
    // collision detected!
    return true;
  } else {
    // no collision
    return false;
  }
}


// Return boolean if a sprite has collided with any obstacle
var spriteCollisionOccured = function(sprite, obstacles_list) {
  for (var i in obstacles_list) {
    var obs = obstacles_list[i];

    if (collisionOccured(sprite, obs)) {
      ribbonImageData = ctx.getImageData(0,0, sprite.getWidth(), sprite.getHeight());
      debugger;
      return true;
    }
  }
  return false;
}


var spriteOutOfBounds = function(sprite) {

  if (sprite.getPosY() < -30) {
    // above bounds
    return true;

  } else if (sprite.getPosY() + sprite.getHeight() > (c_height + 30)) {
    // below bounds
    return true;

  } else {
    // no collision
    return false;
  }
}
