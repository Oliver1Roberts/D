var ball;
var database,Position;
function setup() {
  createCanvas (400, 400);
  database=firebase.database();
  var hypnotic_ball=database.ref("Ball/Position");
  hypnotic_ball.on("value", readPosition, showError)
  ball = createSprite (200, 200, 50, 50);
  ball.shapeColor = "purple";
}

function draw() {
  background("white");
  if(keyDown (LEFT_ARROW)) {
    writePosition(-1, 0);
  }
  else if(keyDown (RIGHT_ARROW)) {
    writePosition(1, 0);
  }
  else if(keyDown (UP_ARROW)) {
    writePosition(0, -1);
  }
  else {
    writePosition(0, 1);
  }
  drawSprites();
}
/*function writePosition(x, y){
 ball.x=ball.x+x;
  ball.y=ball.y+y;
} */

function readPosition(data) {
  Position=data.val();
  ball.x=Position.x;
  ball.y=Position.y;
}

function writePosition(x,y) {
  database.ref("Ball/Position").set({
    x:Position.x+x,
    y:Position.y+y
  })

}

function showError(){
  console.log("test")
}
