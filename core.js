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


  // setup obstacles in world
  createObstacle()


  // begin animation
  animation = setInterval(function(){
    animateWorld();
  }, framerate);



  // stop animation after a few seconds
  setTimeout(function(){ clearInterval(animation); }, 60000);
};

// run game
setup();
