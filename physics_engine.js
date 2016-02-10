/*
 * Control the velocity of the ribbon
 */

// Contants
var jump_dist = -10; // negative means going up
var gravity_constant = 9.8; // positive means going down
var gravity_multiplier = 0.01;
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
