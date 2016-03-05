/*
 * Obstacles class
 * Dependancies: entity
 */

// list of all obstacles
// Obstacles outside off map will need to be popped off list to reduce computational time
var obstacles_list = [];


var createObstacle = function(entityKey) {
  var obst = new Entity();
  obst.setImg(entityKey);
  
  obst.setPosX(c_width);
  obst.setPosY(genRandomNumber(0, (c_height - obst.height)));

  obst.setVelX(OBST_VELX);
  obst.setVelY(OBST_VELY);

  obstacles_list.push(obst);

}

// remove the first obstacle from obstacle list
// to save computation when comparing for collisions
var removeFirstObstacle = function() {
  obstacles_list.shift();
}

var numberOfObstacles = function() {
  return obstacles_list.length;
}
