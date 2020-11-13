var b,a;
var s ,w ,t ;
function setup() {
  createCanvas(1600,400);
  b = createSprite(50, 200, 40, 20);
  a = createSprite(1500, 200, 30, 200);


}

function draw() {
  background("black");  
  s = random(55,90);
 w = random(400,1500);
  
  b.velocityX = spd ;
  
 
  
  
  drawSprites();
}