var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 80, 50);
  movingRect=createSprite(200,200,50,30);

}

function draw() {
  background(255,255,255); 
  movingRect.x = mouseX;
  movingRect.y=mouseY;

  movingRect.shapeColor = "green";
  fixedRect.shapeColor= "green";
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor = "red";
  fixedRect.shapeColor= "red";
  }
  drawSprites();
}