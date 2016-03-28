/* Ribbon entity
 * Note: used by physics_engine.js
 */

// initialize global ribbon
var ribbon = new Entity();

var loadRibbon = function() {
  ribbon.setImg("RIBBON");
  ribbon.setWidth(ribbon.getWidth() - 15) // specific to cube bounding box
  ribbon.setPosX(RIBBON_INIT_POS_X);
  ribbon.setPosY(RIBBON_INIT_POS_Y);
};

var resetRibbon = function() {
  ribbon.reset();
  ribbon.setPosX(RIBBON_INIT_POS_X);
  ribbon.setPosY(RIBBON_INIT_POS_Y);
};
