var bullets,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  thicknessrandom(22,81)
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness,100);

  car.velocityX = 5;

  speed=random(25,31);
  weight=random(400,1500);

   bullet= velocityX = speed;

}

function draw() {
  background("black"); 
  
  if(wall.x=bullet < (bullet.width+wall.width)/2){
    bullet.velocityX=0
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>100){
      bullet.shapecolor=color("white")
    }
    if(deformation<100 && deformation>100){
      bullet.shapecolor=color("white")
    }
    if(deformation<100){
      bullet.shapecolor=color("white")
    }
  }

  if(hascollided(bullet,wall))
  {
     bullet.velocityX=0;
     var damage =-0.5 * weight * speed* speed/(thickness *thickness *thickness);

     if(damage>10)
     {
       wall.shapecolor=("red")
     }

     if(damage<10)
     {
       wall.shapecolor=("green");
     }
  }
  drawSprites();
}



function hasCollided (1bullet,1wall); {
  bulletRightEdge=1bullet.x +1bullet.width;
  wallLeftEdge=1wall.x;
  if(bulletRightEdge>=wallLeftEdge){
  return true
}
 return false

}