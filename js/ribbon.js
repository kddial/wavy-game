/* Ribbon entity
 * Note: used by physics_engine.js
 */

// initialize global ribbon
var ribbon = new Entity();

var loadRibbon = function() {
  ribbon.setImg("RIBBON");
  ribbon.setWidth(ribbon.getWidth() - 15) // specific to cube
  ribbon.setPosX(getInitPosXRibbon());
};

var resetRibbon = function() {
  ribbon.reset();
  ribbon.setPosX(getInitPosXRibbon());
};

var getInitPosXRibbon = function() {
  return 100;
};