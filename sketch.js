var bgImg
var ss,ssImg
var alien,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10
var alienGrp,laserGrp
var laser 
var gameState="play"
var score=0

function preload() {
  bgImg=loadImage("./assets/bg5.jpg")
  ssImg=loadImage("./assets/ss1.png")
  a1=loadImage("./assets/a1.png")
  a2=loadImage("./assets/a2.png")
  a3=loadImage("./assets/a3.png")
  a4=loadImage("./assets/a4.png")
  a5=loadImage("./assets/a5.png")
  a6=loadImage("./assets/a6.png")
  a7=loadImage("./assets/a7.png")
  a8=loadImage("./assets/a8.png")
  a9=loadImage("./assets/a9.png")
  a10=loadImage("./assets/a10.png")

}

function setup() {
  canvas = createCanvas(1500,600);
  ss=createSprite(100,300)
  ss.addImage(ssImg)
  ss.scale=0.5
  alienGrp=new Group()
  laserGrp=new Group()
 
}

function draw() {
  background(bgImg);
  drawSprites()
fill (255)
textSize(30)
text("SCORE : "+score,50,50)
if(keyDown(UP_ARROW)){
  ss.y-=5
}

if(keyDown(DOWN_ARROW)){
  ss.y+=5
}
  
 spawnAliens();
 if(keyDown("space")){
releaseLaser()
 }

 laserGrp.isTouching(alienGrp,destroyAlien)
}

function spawnAliens(){
  if(frameCount%150===0){
var ran=Math.round(random(100,500))
alien=createSprite(1500,ran)

var ranImg=Math.round(random(1,10))
switch(ranImg){
case 1:
  alien.addImage(a1)
  alien.scale=0.3
  alien.velocityX=-4
  break;
  case 2:
  alien.addImage(a2)
  alien.scale=0.4
  alien.velocityX=-6
  break;
  case 3:
  alien.addImage(a3)
  alien.scale=0.5
  alien.velocityX=-7
  break;
  case 4:
  alien.addImage(a4)
  alien.scale=0.4
  alien.velocityX=-10
  break;
  case 5:
  alien.addImage(a5)
  alien.scale=0.3
  alien.velocityX=-6
  break;
  case 6:
  alien.addImage(a6)
  alien.scale=0.4
  alien.velocityX=-12
  break;
  case 7:
  alien.addImage(a7)
  alien.scale=0.4
  alien.velocityX=-8
  break;
  case 8:
  alien.addImage(a8)
  alien.scale=0.5
  alien.velocityX=-9
  break;
  case 9:
  alien.addImage(a9)
  alien.scale=0.3
  alien.velocityX=-10
  break;
  case 10:
  alien.addImage(a10)
  alien.scale=0.3
  alien.velocityX=-7
  break;
}
alien.lifetime=400
alienGrp.add(alien)
  }
}

function releaseLaser(){
  laser=createSprite(200,ss.position.y,60,5)
  laser.shapeColor="aqua"
  laser.velocityX=10
  laser.lifetime=160
  laserGrp.add(laser)

}

function destroyAlien(laser,alien){
alien.destroy()
laserGrp.destroyEach()
score+=5 
}