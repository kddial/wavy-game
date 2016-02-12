/*** Initialize global variables ***/

var canvas = null;
var ctx = null;
var framerate = 1000/60;
var c_width = 400;
var c_height = 800;

/*** Variables used externally ***/

// Action states of the game. if an action is being performed, then it is true.
// if all values are false, then the game is in neutral state
// Note: used by input_engine.js, physics_engine.js
var actions = {
  "jump" : false
};
