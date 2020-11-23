
var monkey , monkeyrunning
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var PLAY = 1;
var END = 0;
var gamestate = 1;

function preload(){
  
  
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);

  
  monkey = createSprite(40,160,20,20);
  monkey.addAnimation("running",monkeyrunning);
  monkey.scale = 0.1;
  
  score = 0;

  
  ground = createSprite(30,195,600,10);

  ground.visible = 1;
  ground.x = ground.width/2;
 
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  }


function draw() {
    background("green");
  if(gamestate === PLAY){
  if(keyDown("space" ) && monkey.y>=150){
    monkey.velocityY = -15 ;
  }
    monkey.velocityY = monkey.velocityY+0.8;
  
      ground.velocityX = -4;

  if(ground.x>0){
    ground.x = ground.width/2;
  }
  
  if(monkey.isTouching(obstacleGroup)){
    gamestate = END;
  }
      if(monkey.isTouching(FoodGroup)){
         score = score+1;
        FoodGroup.destroyEach();
        
  }
    text("score :",300,30)
  text(score,340,30)
  obstacles();
  clouds();
    
  }
  else if(gamestate === END){
  obstacleGroup.destroyEach();
      FoodGroup.destroyEach();
    score  = 0;
    ground.velocityX = 0
    
  }
  
        monkey.collide(ground);
  
  drawSprites();

  
}

function obstacles(){
  if(frameCount%60===0){
    obstacle = createSprite(random(600,650),170,10,40);
    obstacle.velocityX = -6
    obstacle.scale = 0.1; 
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
  }
}
function clouds(){
  if(frameCount%60===0){
    banana = createSprite(random(120,200),30,10,40);
    banana.velocityY = 0.5
    banana.velocityX = -6
    banana.scale = 0.1; 
    banana.addImage(bananaImage);
    FoodGroup.add(banana)
  }
}




