var car,bullet;
var thikeness,speed,weight;

function setup() 
{
  createCanvas(1600,400);

  speed=random(233,321);
  weight = random(30,52);
  thikeness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "green";
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thikeness,height/2); 
  wall.shapeColor ="green";
  
}

function draw() {
  background("black");  

  if(hasCollide(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thikeness*thikeness*thikeness);
    if(damage>10)
    {
      wall.shapeColor=color(0,0,255);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  else
  {
    wall.shapeColor = "green";
    bullet.shapeColor = "green";
  }

  drawSprites();
}

function hasCollide(bullet,wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  else
  {
  return false;
  }
}

