var direction = 90;

var centerX = ctx.canvas.width/2
var centerY = ctx.canvas.height/2

var player = document.getElementById("playerSprite");
var zombie = document.getElementById("zombieSprite");

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function draw() {
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');
     var centerX = 130;
     var centerY = 50;
     ctx.rotate(direction*Math.PI/180)
     ctx.drawImage(player, centerX, centerY, 60, 50);
  }
}

function move() {
  
}

function clear() {
 context.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function gameLoop() {
  move(); 
  draw();
  setTimeout(clear, 1000);
}

while (true) {
  gameLoop();
}