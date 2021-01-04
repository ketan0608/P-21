var car1,car2,car3,car4,wall1,wall2,wall3,wall4
var speed,weight;
function setup() {
  createCanvas(800,400);
  car1 = createSprite(750, 50, 10, 10);
wall1 = createSprite(760,50,10,40);
  car2 = createSprite(750,150,10,10);

  car3 = createSprite(750,250,10,10);

  car4 = createSprite(750,350,10,10);

  speed = random(55,90);
 weight = random(400,1500)

 car1.velocityX = speed;
 car2.velocityX = speed;
 car3.velocityX = speed;
 car4.velocityX = speed;

}

function draw() {
  background("black");  
  drawSprites();
}