/*
 * Obstacles class
 * Dependancies: entity
 */

 // Obstacle parameters
var OBST_POSX = 0;  // not used
var OBST_POSY = 0;  // not used

var OBST_VELX = -2;  // moving to the left
var OBST_VELY = 0;  // staying still in y-axis

// list of all obstacles
// Obstacles outside off map will need to be popped off list to reduce computational time
var obstacles_list = [];


var createObstacle = function(entityKey) {
  var obst = new Entity();
  obst.setImg(entityKey);
  
  obst.setPosX(c_width);
  obst.setPosY(genRandomNumber(0, (c_height - obst.height)));
  console.log(obst.getPosY());

  obst.setVelX(OBST_VELX);
  obst.setVelY(OBST_VELY);

  obstacles_list.push(obst);

}
