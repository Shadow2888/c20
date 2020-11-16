var c,w;
var sp,wg;
function setup() {
  createCanvas(1600,400);
  sp=random(55,90);
  wg=random(400,1500);
  w = createSprite(1500, 200, 60, 200);
 c = createSprite(50,200,35,20);
 c.velocityX = sp;
  
 

 
 
//c.x = mouseX;
//c.y = mouseY;

}

function draw() {
  background(0);  
  if(w.x - c.x < (c.width + w.width)/2){
    c.velocityX = 0;
  var dft =0.5 * sp * wg * sp/25509;
if(dft > 180){
  c.shapeColor=color(255,0,0);
}
  
if(dft > 100 && dft < 180){
  c.shapeColor=color(230,230,0);
}
 
if(dft < 100){
  c.shapeColor=color(0,255,0);
}

}
  drawSprites();

}