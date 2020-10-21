var fixedRect, movingRect;
var gameObject1, gameObject2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  gameObject1 = createSprite(600, 100, 90, 95);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;
  
  gameObject2 = createSprite(100, 400, 80, 85);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect, gameObject2)) {
  movingRect.shapeColor = "red";
  gameObject2.shapeColor = "red"; 
} else {
  movingRect.shapeColor = "green";
  gameObject2.shapeColor = "green";
}
 
  drawSprites();
}
