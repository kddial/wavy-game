// Create Entity class
function Entity() {
  this.posx = 0;
  this.posy = 0;

  this.velx = 0;
  this.vely = 0;

  this.img = null;


  /* Positions */

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

  // increment position x by distance
  this.incPosX = function(distance) {
    this.posx = this.posx + distance;
  }

  // increment position y by distance
  this.incPosY = function(distance) {
    this.posy = this.posy + distance;
  }

  /* Velocity */

  // return velocity x
  this.getVelX = function() {
    return this.velx;
  }

  // return velocity y
  this.getVelY = function() {
    return this.vely;
  }

  // set velocity x
  this.setVelX = function(vel) {
    this.velx = vel;
  }

  // set velocity y
  this.setVelY = function(vel) {
    this.vely = vel;
  }

  // set reset velocity
  this.resetVelocity = function() {
    this.velx = 0;
    this.vely = 0;
  }


  // increment velocity x by vel
  this.incVelX = function(vel) {
    this.velx = this.velx + vel;
  }

  // increment velocity y by vel
  this.incVelY = function(vel) {
    this.vely = this.vely + vel;
  }

  /* Image */

  // return image
  this.getImg = function() {
    return this.img;
  }

  // set image
  this.setImg = function(img_obj) {
    this.img = img_obj;
  }

}
