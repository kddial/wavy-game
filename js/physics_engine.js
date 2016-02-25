/*
 * Control the velocity of the ribbon
 */

// Contants
var jump_dist = -15; // negative means going up
var gravity_constant = 9.8; // positive means going down
var gravity_multiplier = 0.05;
var gravity = gravity_constant * gravity_multiplier;



// Render sprite per frame based on action states
var updateRibbonPhysics = function(sprite, actions) {

  // set velocity
  if (actions["jump"]) {
    sprite.setVelY(jump_dist);
  } else {
    // neutral state (free falling)
    sprite.incVelY(gravity);
  }

  // calculate and set position based on velocity
  sprite.incPosY(sprite.getVelY());

  // Post velocity calculation
  // after making a jump, the sprite should start falling down due to
  // gravity. thus we need to set the velocity to zero.
  if (actions["jump"]) {
    sprite.resetVelocity();
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
      console.log("WE HIT BROO");
      return true;
    }
  }
  return false;
}