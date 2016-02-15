// Entity image map. Sources will be converted to image objects by the getImage function
var entityImgMap = {
  "CASIO" : "resources/osbtacles.png",
  "RIBBON" : "resources/ribbon.png"
};


// Create Entity class
function Entity() {
  this.posx = 0;
  this.posy = 0;

  this.width = 0;
  this.height = 0;

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

  /* Dimensions */

  // return position x
  this.getWidth = function() {
    return this.width;
  }

  // return position y
  this.getHeight = function() {
    return this.height;
  }


  /* Image */

  // return image
  this.getImg = function() {
    return this.img;
  }

  // set image
  this.setImg = function(entityKey) {
    this.img = entityImgMap[entityKey];
    this.width = this.img.width;
    this.height = this.img.height;
  }

  // reset entity's position and velocity
  this.reset = function() {
    this.posx = 0;
    this.posy = 0;

    this.velx = 0;
    this.vely = 0;
  }
}


// Get image as a promise. Converts image sources to image objects in entityImgMap
var getImage = function(entity){
  return new Promise(function(resolve, reject){
    var img = new Image()
    img.onload = function(){
      // replace source url with image object
      entityImgMap[entity] = img;
      resolve(img)
    }
    img.onerror = function(){
      reject(img)
    }
    img.src = entityImgMap[entity];
  })
};

// Load all entity images
var loadAllImages = new Promise(function(resolve, reject){
  var entities = Object.keys(entityImgMap);
  var entityPromises = entities.map(getImage) // call getImage on each array element and return array of promises
  Promise.all(entityPromises).then(function(images){
    // all images have been loaded, do something with each image (ignored)
    // for (var i=0; i<images.length; i++){
    // }
    resolve();
  }).catch(function(urls){
    console.log("Error fetching some images: " + urls)
  })
});
