/*
 * Obstacles class
 * Dependancies: entity
 */

 // Obstacle parameters
OBST_POSX = c_width;  // right edge of screen
OBST_POSY = 80;  // todo: random number generator

OBST_VELX = -2;  // moving to the left

// image for all obstacles
var obstacle_img = new Image();
obstacle_img.src = "resources/osbtacles.png";


// list of all obstacles
// Obstacles outside off map will need to be popped off list to reduce computational time
var obstacles_list = [];


var createObstacle = function() {
  var obst = new Entity();
  obst.setPosX(OBST_POSX);
  obst.setPosY(OBST_POSY);

  obst.setVelX(OBST_VELX);
  obst.setImg(obstacle_img);

  obstacles_list.push(obst);

}
