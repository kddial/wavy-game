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

  // begin animation loop
  this.requestAnimationFrame(function() {
    animateWorld();
  } );
};


// Run the game
var runGame = function() {
  // do everything after images are loaded
  loadAllImages.then(function(result){
    console.log("yoooooooooo images are loaded")
    setup();

    // create entities
    loadRibbon();
    createObstacle("CASIO");
  });
}


// Let it rip!
runGame();
