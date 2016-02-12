/* Ribbon entity
 * Note: used by physics_engine.js
 */

// initialize global ribbon
var ribbon = new Entity();
var ribbon_img = new Image();
ribbon_img.src = "resources/ribbon.png";
ribbon.setImg(ribbon_img);
ribbon.setPosX(c_width/2 - 30);
// ribbon.setPosY(c_height/2 - 30);
