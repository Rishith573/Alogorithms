var fixedRect,movingRect;
var rect1, rect2;
function setup() {
  createCanvas(800,800);
  fixedRect= createSprite(200, 200, 50, 50);
  movingRect= createSprite(400, 200, 30, 30);
  rect1 = createSprite(200, 500, 30, 30);
  rect1.shapeColor = "blue";
  rect2 = createSprite(600, 500, 30, 30);
  rect2.shapeColor = "pink";

  movingRect.debug = true;
  fixedRect.debug = true;

  rect1.velocityX = 4;
  rect2.velocityX = -4;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


if(rect1.x-rect2.x<=rect2.width/2+rect1.width/2 && 
  rect2.x-rect1.x<=rect1.width/2+rect2.width/2){
    rect1.velocityX = -rect1.velocityX;
    rect2.velocityX = -rect2.velocityX;
  }

if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2)
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
  drawSprites();
}
