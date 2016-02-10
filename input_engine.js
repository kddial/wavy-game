/*
 * Input engine.
 * Sets action based on input keys or mouse clicks.
 */


// bind keys to actions. key "space" binds action "jump".
var bindings = {
  32 : "jump", // space
  38 : "jump", // up arrow
  "mouse" : "jump", // mouse click
  "touch" : "jump"
}


// set canvas mouse coordinates
var mouse = {
  x : 0,
  y : 0
};


var setInputEventListeners = function() {
  // set event listerners
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', onMouseUp);

  // add listening to document because cannot focus on canvas
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);

  // touch events from mobile
  canvas.addEventListener("touchstart", onTouchDown, false);
  canvas.addEventListener("touchend", onTouchUp, false);
}


var onMouseMove = function(event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}


var onMouseDown = function(event) {
  action = bindings["mouse"];
  actions[action] = true;
}


var onMouseUp = function(event) {
  action = bindings["mouse"];
  actions[action] = false;
}


var onKeyDown = function(event) {
  // check if key belongs to bindings and perform the action
  if (bindings[event.keyCode]) {
    action = bindings[event.keyCode];
    actions[action] = true;
  }
}


var onKeyUp = function(event) {
  // check if key belongs to bindings and stop the action
  if (bindings[event.keyCode]) {
    action = bindings[event.keyCode];
    actions[action] = false;
  }
}

var onTouchDown = function(event) {
  action = bindings["touch"];
  actions[action] = true;
}


var onTouchUp = function(event) {
  action = bindings["touch"];
  actions[action] = false;
}
