var bullet,wall;
var speed,thickness,weight;

var damage;

function setup() {
  createCanvas(1000,800);
 bullet= createSprite(100, 200, 70, 30);
 bullet.shapeColor="white";
 wall=createSprite(800, 400, thickness, 600);
 speed=random(223,321);
 thickness=random(22,83)
 weight=random(30,52);
 bullet.velocityX=speed;
}

function draw() {
  background(0);  
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
wall.shapeColor="red";
}
if(damage<10){
  wall.shapeColor="green";
}
}
  drawSprites();
  textSize(20);
  text("Damage = "+damage,300,100);
}

function hasCollided(lbullet,lwall){
bulletredge=lbullet.x+lbullet.width;
wallledge=lwall.x;
if(bulletredge>=wallledge){
  return true;
}
else {
  return false;
}
}