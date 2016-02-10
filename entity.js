// Create Entity class
function Entity() {
  this.posx = 0;
  this.posy = 0;
  this.img = null;

  // return position
  this.getPos = function() {
    return [this.posx, this.posy];
  }

  // return position x
  this.getPosX = function() {
    return this.posx;
  }

  // return position y
  this.getPosY = function() {
    return this.posy;
  }

  // set position
  this.setPos = function(x, y) {
    this.posx = x;
    this.posy = y;
  }

  // set position x
  this.setPosX = function(x) {
    this.posx = x;
  }

  // set position y
  this.setPosY = function(y) {
    this.posy = y;
  }

  // return image
  this.getImg = function() {
    return this.img;
  }

  // set image
  this.setImg = function(src) {
    this.img = new Image();
    this.img.src = "resources/ribbon.png";
  }

}
