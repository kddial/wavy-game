// Clear canvas and draw background
var clearCanvas = function() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
}

// Render sprite per frame
var animateSprite = function(sprite) {
  clearCanvas();
  ctx.drawImage(sprite.getImg(), sprite.getPosX(), sprite.getPosY());
};
