var monkey, monkey_running, monkeyimage;
var banana, bananaImage, obstacle, obstacleImage;
var obstaclegroup, bananagroup;
var survivalTime = 0;
var ground;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")


  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  monkeyimage = loadImage("sprite_0.png");
}



function setup() {
  createCanvas(600, 600);

  monkey = createSprite(80, 356, 20, 20);
  monkey.addAnimation("image monkey", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 390, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);
  
  bananagroup = createGroup();
  obstaclegroup = createGroup();
}


function draw() {

  background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  
  text("Survival Time: "+ survivalTime, 400,50);

  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  if (keyDown("space") && monkey.y >= 350) {
    monkey.velocityY = -18;
  }

if (ground.x < 150) {
      ground.x = ground.width / 2;
    }
  
  food();
  obstacles();

  drawSprites();

}

function food() {
  if(frameCount % 80 === 0){
    banana = createSprite(400,380,10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.12;
    banana.y = Math.round(random(100,300));
    banana.velocityX = -5;
    banana.lifetime = 120;
    bananagroup.add(banana);
  }
}
function obstacles(){
  if(frameCount % 300 === 0) {
  obstacle = createSprite(400,380,900,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.12;
  obstacle.velocityX = -5;
 }
}