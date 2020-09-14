var bullet1,bullet2,bullet3,bullet4,wall;
var speed,weight1,weight2,weight3,weight4,thickness1,thickness2,thickness3,thickness4;
var line1,line2,line3;


function setup() {
  createCanvas(1600,700);

  bullet1=createSprite(50, 100, 80, 40);
  bullet2=createSprite(50, 250, 80, 40);
  bullet3=createSprite(50, 400, 80, 40);
  bullet4=createSprite(50, 550, 80, 40);


wall1=createSprite(1300,74,thickness1,120);
 wall1.shapeColor=color(80,80,80);

  wall2=createSprite(1300,227,thickness2,120);
  wall2.shapeColor=color(80,80,80);

  wall3=createSprite(1300,374,thickness3,120);
  wall3.shapeColor=color(80,80,80);

  wall4=createSprite(1300,523,thickness4,120);
  wall4.shapeColor=color(80,80,80);
 
line1=createSprite(800,150,1600,10);
line1.shapeColor=color("pink");

line2=createSprite(800,300,1600,10);
line2.shapeColor=color("pink");

line3=createSprite(800,450,1600,10);
line3.shapeColor=color("pink");

line4=createSprite(800,600,1600,10);
line4.shapeColor=color("pink");

thickness1=random(22,83);
thickness2=random(22,83);
thickness3=random(22,83);
thickness4=random(22,83);

speed=random(223,321);
bullet1.velocityX=speed;
weight1=random(30,52);


speed=random(223,321);
bullet2.velocityX=speed;
weight2=random(30,52);


speed=random(223,321);
bullet3.velocityX=speed;
weight3=random(30,52);

speed=random(223,321);
bullet4.velocityX=speed;
weight4=random(30,52);




}



function draw() {
  background(255,255,255); 
  if(hasCollided(bullet1,wall1)){
bullet1.velocityX=0;
var Damage=0.5*weight1*speed*speed/(thickness1*thickness1*thickness1);

if(Damage<10){
wall1.shapeColor=color("green");
}
if(Damage>10){
  wall1.shapeColor=color("red");
  }
  }


  if(hasCollided(bullet2,wall2)){
    bullet2.velocityX=0;
    var Damage=0.5*weight2*speed*speed/(thickness2*thickness2*thickness2);
    
    if(Damage<10){
    wall2.shapeColor=color("green");
    }
    if(Damage>10){
      wall2.shapeColor=color("red");
      }
      }




 if(hasCollided(bullet3,wall3)){
        bullet3.velocityX=0;
        var Damage=0.5*weight3*speed*speed/(thickness3*thickness3*thickness3);
        
        if(Damage<10){
        wall3.shapeColor=color("green");
        }
        if(Damage>10){
          wall3.shapeColor=color("red");
          }
          }




          if(hasCollided(bullet4,wall4)){
            bullet4.velocityX=0;
            var Damage=0.5*weight4*speed*speed/(thickness4*thickness4*thickness4);
            
            if(Damage<10){
            wall4.shapeColor=color("green");
            }
            if(Damage>10){
              wall4.shapeColor=color("red");
              }
              }
  
    
      
  drawSprites();
}

function hasCollided(bullet1 ,wall1){
bulletRightEdge=bullet1.x + bullet1.width;
//bulletRightEdge=bullet2.x + bullet2.width;
//bulletRightEdge=bullet3.x + bullet3.width;
//bulletRightEdge=bullet4.x + bullet4.width;
wallLeftEdge=wall1.x;

if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;

}

function Collided(bullet2 ,wall2){
  //bulletRightEdge=bullet1.x + bullet1.width;
  bulletRightEdge=bullet2.x + bullet2.width;
  //bulletRightEdge=bullet3.x + bullet3.width;
  //bulletRightEdge=bullet4.x + bullet4.width;
  wallLeftEdge=wall2.x;
  
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
  
  }
  function beCollided(bullet3,wall3){
    //bulletRightEdge=bullet1.x + bullet1.width;
    bulletRightEdge=bullet3.x + bullet2.width;
    //bulletRightEdge=bullet3.x + bullet3.width;
    //bulletRightEdge=bullet4.x + bullet4.width;
    wallLeftEdge=wall3.x;
    
    if(bulletRightEdge>=wallLeftEdge){
      return true
    }
    return false;
    
    }
    function doCollided(bullet4 ,wall4){
      //bulletRightEdge=bullet1.x + bullet1.width;
      //bulletRightEdge=bullet2.x + bullet2.width;
      //bulletRightEdge=bullet3.x + bullet3.width;
      bulletRightEdge=bullet4.x + bullet4.width;
      wallLeftEdge=wall4.x;
      
      if(bulletRightEdge>=wallLeftEdge){
        return true
      }
      return false;
      
      }