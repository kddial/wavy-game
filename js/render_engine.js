/*
 * Render engine
 * Dependancies: physics_engine
 */

// Animate the world
var animateWorld = function(frame) {

  // Create object on every OBSTACLE_PER_FRAMES frame
  if (frame % OBSTACLE_PER_FRAMES == 0) {
    createObstacle("CASIO");

    if (obstacles_list.length > MAX_NUMBER_OF_OBSTACLES) {
      removeFirstObstacle();
    }

  }

  // Update physics
  updateRibbonPhysics(ribbon, actions_state);
  updateObstaclesPhysics(obstacles_list);

  // Check for collision
  if (spriteOutOfBounds(ribbon) || spriteCollisionOccured(ribbon, obstacles_list)) {

    gameOver(frame);

    return false;
  }

  // Draw on canvas
  clearCanvas();
  animateSprite(ribbon);
  animateObstacles(obstacles_list);

  // Continously display score
  displayScore(frame);

  // recursive animation loop
  this.requestAnimationFrame(function() {
    // increment frame number
    animateWorld(frame + 1);
  } );
}



// Clear canvas and draw background
var clearCanvas = function() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
}

// Render sprite per frame
var animateSprite = function(sprite) {
  ctx.drawImage(sprite.getImg(), sprite.getPosX(), sprite.getPosY());
};

// Render obstacles per frame
var animateObstacles = function(obstacles_list) {
  for (var i in obstacles_list) {
    var obs = obstacles_list[i];
    ctx.drawImage(obs.getImg(), obs.getPosX(), obs.getPosY());
  }
};

// Draw text on canvas
var drawText = function(text, posx, posy, color) {
  drawTextColorSize(text, posx, posy, color, 30);
};

var drawSmallText = function(text, posx, posy, color) {
  drawTextColorSize(text, posx, posy, color, 22);
};

// Draw text on canvas
var drawLargeText = function(text, posx, posy, color) {
  drawTextColorSize(text, posx, posy, color, 60);
};

// Draw text on canvas
var drawExtraLargeText = function(text, posx, posy, color) {
  drawTextColorSize(text, posx, posy, color, 80);
};


// example color is "rgba(255,165,0,1)": string
// example size is 80: int
var drawTextColorSize = function(text, posx, posy, color, size) {
  if (color) {
    ctx.fillStyle = color;
  } else {
    ctx.fillStyle = "rgba(0,0,0,1)" // black
  }
  ctx.font = size + 'px "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif';
  ctx.fillText(text, posx, posy);
}


// Reset game by reseting sprite position and clearing obstacle list
var resetGame = function() {

  // garbage collector will delete previous objects (hopefully)
  obstacles_list = [];
  resetRibbon();
}

// Actions to do once collision occurs
var gameOver = function(frame) {

  // set top score
  frameScore = getScoreRoundedByFactor(frame);
  var topScoreDiv = document.getElementById('topScore');
  var topScoreVal = Number(topScoreDiv.innerHTML);
  if (frameScore > topScoreVal) {
    topScoreDiv.innerHTML = frameScore;
  }

  // change state to game over
  resetGame();
  game_state = GAME_OVER_S;

  // display game over text
  drawExtraLargeText(game_over_text1, 285, 250, null);
  drawText(game_over_text2, 295, 300, null);

  // spam game over text
  drawGameOverSpamAttack();
}


var drawGameOverSpamAttack = function() {
  // spam the shit out of game over text
  setTimeout(function() {
    gameOverSpamColor = 0;
    gameOverSpamColorIncrease = true;

    drawGameOverRepeatInterval = setInterval(function(x){ 

      // increase color until 255, then decrease to 0
      if (gameOverSpamColorIncrease) {
        if (gameOverSpamColor < 255) {
          gameOverSpamColor += 2;
        } else {
          gameOverSpamColorIncrease = false;
        }
      } else {
        if (gameOverSpamColor > 0) {
          gameOverSpamColor--;
        } else {
          gameOverSpamColorIncrease = true;
        }
      }

      drawGameOverRandom(gameOverSpamColor); 
      }, 100); // spanning at every x milliseconds
  }, 400); // after x time, then start spamming
}

var drawGameOverRandom = function(color_val) {
  var x = genRandomNumber(-200, c_width-200)
  var y = genRandomNumber(-100, c_height)
  var color = "rgba(" +color_val+ "," +color_val+ "," +color_val+ ",1)"

  drawExtraLargeText(game_over_text1, x, y, color);
  drawText(game_over_text2, x+10, y+50, color);
}

var displayScore = function(frame) {
  // display score
  frameScore = getScoreRoundedByFactor(frame);
  var scoreDiv = document.getElementById('score');
  scoreDiv.innerHTML = frameScore;
}
