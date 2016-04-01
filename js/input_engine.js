/*
 * Input engine.
 * Sets action based on input keys or mouse clicks.
 */


// bind keys to actions. key "space" binds action "jump".
var bindings = {
  32 : "jump", // space
  38 : "jump", // up arrow
  "mouse" : "jump", // mouse click
  "touch" : "jump" // mobile touch
}


// set canvas mouse coordinates
var mouse = {
  x : 0,
  y : 0
};

var setInputEventListeners = function(startGameFunction, gameOverFunction) {
  // set event listerners
  canvas.addEventListener('mousemove', function(event){ onMouseMove(event,startGameFunction, gameOverFunction); });
  canvas.addEventListener('mousedown', function(event){ onMouseDown(event,startGameFunction, gameOverFunction); });
  canvas.addEventListener('mouseup', function(event){ onMouseUp(event,startGameFunction, gameOverFunction); });

  // add listening to document because cannot focus on canvas
  document.addEventListener('keydown', function(event){ onKeyDown(event,startGameFunction, gameOverFunction); });
  document.addEventListener('keyup', function(event){ onKeyUp(event,startGameFunction, gameOverFunction); });

  // touch events from mobile
  canvas.addEventListener("touchstart", function(event){ onTouchDown(event,startGameFunction, gameOverFunction); });
  canvas.addEventListener("touchend", function(event){ onTouchUp(event,startGameFunction, gameOverFunction); });
}

// dont really need this
var onMouseMove = function(event, startGameFunction, gameOverFunction) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}


var onMouseDown = function(event, startGameFunction, gameOverFunction) {
  if (game_state == GAME_S) {
    action = bindings["mouse"];
    actions_state[action] = true;
  }
}


var onMouseUp = function(event, startGameFunction, gameOverFunction) {
  if (game_state == START_S) {
    actionsToDoOnStartState(startGameFunction);

  } else if (game_state == GAME_OVER_S) {
    actionsToDoOnGameOverState(gameOverFunction);

  } else if (game_state == GAME_S) {
    action = bindings["mouse"];
    actions_state[action] = false;
  }
}


var onKeyDown = function(event, startGameFunction, gameOverFunction) {
  // check if key belongs to bindings and perform the action
  if (bindings[event.keyCode]) {
    if (game_state == GAME_S) {
      action = bindings[event.keyCode];
      actions_state[action] = true;
    }
  }
}


var onKeyUp = function(event, startGameFunction, gameOverFunction) {
  // check if key belongs to bindings and stop the action
  if (bindings[event.keyCode]) {
    if (game_state == START_S) {
      actionsToDoOnStartState(startGameFunction);

    } else if (game_state == GAME_OVER_S) {
      actionsToDoOnGameOverState(gameOverFunction);

    } else if (game_state == GAME_S) {
      action = bindings[event.keyCode];
      actions_state[action] = false;
    }
  }
}


var onTouchDown = function(event, startGameFunction, gameOverFunction) {
  event.preventDefault();
  if (game_state == GAME_S) {
    action = bindings["touch"];
    actions_state[action] = true;
  }
}


var onTouchUp = function(event, startGameFunction, gameOverFunction) {
  event.preventDefault();
  if (game_state == START_S) {
    actionsToDoOnStartState(startGameFunction);

  } else if (game_state == GAME_OVER_S) {
    actionsToDoOnGameOverState(gameOverFunction);

  } else if (game_state == GAME_S) {
    action = bindings["touch"];
    actions_state[action] = false;
  }
}

var actionsToDoOnStartState = function(startGameFunction) {

  if (actions_state["jump"]) {
    // this prevents moving from game over screen to starting game, when dieing while holding a key down
    // when you die while holding a key down, the key up will start the new game (we need to prevent this)
    // reset action states
    actions_state["jump"] = false;
  } else {
    // start the game
    game_state = GAME_S;
    startGameFunction();
  }
}

var actionsToDoOnGameOverState = function(gameOverFunction) {

  if (actions_state["jump"]) {
    // reset action states
    actions_state["jump"] = false;
  } else {
    // start game over again
    game_state = START_S;
    gameOverFunction();
  }
}
