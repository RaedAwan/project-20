var thickness, wall;

var bullet, speed, weight;
function setup() {

  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(223,321);
   weight = random(30, 52);
  thickness = random(22, 83);

   bullet = createSprite(50, 200, 50, 50);
   
   bullet.velocityX = speed;
   
   bullet.shapeColor = color(255);



wall = createSprite(1500, 200, thickness, height/2);
wall.shapeColor = color(80,80,80);






}

function draw() {
  background(255,255,255); 
 if(wall.x - bullet.x < (bullet.width + wall.width)/2){
   bullet.velocityX = 0;
   var deformation = 0.5 * bulletWeight * bulletSpeed * bulletSpeed/(Thickness of Wall * Thickness of Wall * Thickness of Wall)
   if(deformation > 180){
     car.shapeColor = color("red");

   }
   if(deformation < 180 && deformation > 100){
     car.shapeColor = color("yellow");
   }
   if(deformation < 100){
     car.shapeColor = color("green");
   }
 }
  drawSprites();
}
