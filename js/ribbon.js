/* Ribbon entity
 * Note: used by physics_engine.js
 */

// initialize global ribbon
var ribbon = new Entity();

var loadRibbon = function() {
  ribbon.setImg("RIBBON");
  ribbon.setPosX(c_width/2 - 30);
};

var resetRibbon = function() {
  ribbon.reset();
  ribbon.setPosX(c_width/2 - 30);
};
