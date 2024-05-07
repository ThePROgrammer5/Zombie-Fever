var direction = 90;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function draw() {
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');
     var player = document.getElementById("playerSprite");
     var zombie = document.getElementById("zombieSprite");
     var centerX = 130;
     var centerY = 50;
    ctx.rotate(direction)
     ctx.drawImage(player, centerX, centerY, 60, 50);
     ctx.drawImage(zombie, 0, 0, 70, 60)
  }
}

function move() {
  
}

function clear() {
 context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

function gameLoop() {
  move(); 
  draw();
  setTimeout(clear, 100);
}

while (true) {
  gameLoop();
}