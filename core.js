
/*** Initialize global variables ***/

var canvas = null;
var ctx = null;
var framerate = 1000/30;

/*** Variables used externally ***/

// Action states of the game. if an action is being performed, then it is true.
// if all values are false, then the game is in neutral state
// Note: used by input_engine.js, physics_engine.js
var actions = {
  "jump" : false
};


// Ribbon entity
// Note: used by physics_engine.js
var ribbon = new Entity();
ribbon.setImg("resources/ribbon.png");



/*** Core functionality to setup game ***/

// Setup game
var setup = function() {

  // setup canvas
  canvas = document.getElementById("my_canvas");
  ctx = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;

  // setup input event listeners
  setInputEventListeners();

  // setup animation
  animation = setInterval(function(){
    updateRibbonPhysics(ribbon, actions);
    animateSprite(ribbon);
  }, framerate);

  // stop animation after a few seconds
  setTimeout(function(){ clearInterval(animation); }, 10000);
};


setup();
