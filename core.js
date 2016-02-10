
/*** Initialize global variables ***/

var canvas = null;
var ctx = null;
var framerate = 1000/10;

var img = null;
var x_img = 0;
var y_img = 0;


/*** Variables used externally ***/

// Action states of the game. if an action is being performed, then it is true.
// if all values are false, then the game is in neutral state
// Note: used by input_engine.js
var actions = {
  "jump" : false
};


// Ribbon entity
// Note: used by render_engine.js
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

  // setup animation and stop after a few seconds
  animation = setInterval(function(){ animateSprite(ribbon); }, framerate); // start
  setTimeout(function(){ clearInterval(animation); }, 10000); // stop
};


setup();
