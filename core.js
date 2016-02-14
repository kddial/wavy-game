/*** Core functionality to setup game ***/

// Setup game
var setup = function() {

  // setup canvas
  canvas = document.getElementById("my_canvas");
  ctx = canvas.getContext('2d');
  canvas.width = c_width;
  canvas.height = c_height;

  // setup input event listeners
  setInputEventListeners();
};

// Begin recursive animation loop
var beginAnimation = function() {
  this.requestAnimationFrame(function() {
    animateWorld();
  } );
}


// Run the game
var runGame = function() {
  // do everything after images are loaded
  loadAllImages.then(function(result){
    setup();
    // create entities
    loadRibbon();
    createObstacle("CASIO");
    
    beginAnimation();
  });
}


// Let it rip!
runGame();
