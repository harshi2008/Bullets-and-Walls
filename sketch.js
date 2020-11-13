var bullet, bullet2, bullet3
var thickness
var wall
var speed, weight 
var line, line2, line3, line4

function setup() {
  createCanvas(1600,600);
  //createSprite(400, 200, 50, 50);

  speed= random(223, 321);
  weight= random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 168, 20, 50);
  bullet2 = createSprite(50, 283, 20, 50);
  bullet3 = createSprite(50, 376, 20, 50);
  wall = createSprite(1200, 250, thickness, height/2);
  line = createSprite(1500, 195, 3000, 8);
  line2 = createSprite(1500, 305, 3000, 8);
  line3 = createSprite(1500, 398, 3000, 8);
  line4 = createSprite(1500, 100, 3000, 8);
}

function draw() {
  background("purple");  
  wall.shapeColor= rgb(0, 70, 70);

  bullet.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;

  //bullet.collide(wall);
  //bullet2.collide(wall);
  //bullet3.collide(wall);

  line.shapeColor = "blue";
  line2.shapeColor = "blue";
  line3.shapeColor = "blue";
  line4.shapeColor = "blue";

 function hasCollided(bullet, bullet2, bullet3, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }

  else{
    return false;
  }
 }

 if(hasCollided(bullet, bullet2, bullet3, wall)){
  bullet.velocityX = 0;
  bullet2.velocityX = 0;
  bullet3.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor = color(255, 0, 0);
  }

  if(damage<10){
    wall.shapeColor = color(0, 255, 0);
  }

 }

  drawSprites();
}