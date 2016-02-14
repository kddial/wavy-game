/*
 * Obstacles class
 * Dependancies: entity
 */

 // Obstacle parameters
var OBST_POSX = c_width;  // right edge of screen
var OBST_POSY = 80;  // todo: random number generator

var OBST_VELX = -2;  // moving to the left
var OBST_VELY = 0;  // staying still in y-axis

// list of all obstacles
// Obstacles outside off map will need to be popped off list to reduce computational time
var obstacles_list = [];


var createObstacle = function(entityKey) {
  var obst = new Entity();
  obst.setPosX(OBST_POSX);
  obst.setPosY(OBST_POSY);

  obst.setVelX(OBST_VELX);
  obst.setVelY(OBST_VELY);
  obst.setImg(entityKey);
  console.log("create obstacle width, height:", obst.width, obst.height);

  obstacles_list.push(obst);

}
