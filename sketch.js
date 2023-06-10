  var rocket,rocketimg
  var star,starimg,stargroup
  var fireball,fireballimg,fireballgroup
  var rocket_running, rocket
  var backgroundimg
  var space 

  function preload(){
  backgroundimg=-loadImage("assests/space.jpeg")
  rocketimg=loadImage("assests/Rocket.png")
  starimg=loadImage("assests/Star.png")
  
 // fireballimg= loadAnimation("assests/fireball_1.png","assests/fireball_2.png","assests/fireball_3.png","assests/fireball_4.png","assests/fireball_5.png")
}




function setup() {
 createCanvas(600,600);

  space=createSprite(300,300)
  space.addImage(backgroundimg)

  fireball=createSprite(width-50,100,10,10);
  fireball.addAnimation("fireballimg", fireballimg);
  fireball.scale = 0.5

  rocket = createSprite(50,height-70,20,50);
  
  
 
  rocket.setCollider('circle',0,0,350)
  rocket.scale = 0.08;
}


function draw() 
{
  background(51);
  drawSprites()








}

