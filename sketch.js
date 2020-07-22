var ground;
var dustbinImg,dustbinSprite;
var paperImg,paperSprite;
var log1Sprite,log2Sprite,log3Sprite;
var launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 650, 800, 10);
	
	dustbinSprite = new Bin(600, 580, 150, 150);

	paperSprite = new Paper(100,200,70);
	
	log1Sprite=new Log(700, 650, 200, 20);

	log2Sprite=new Log(600, 610, 20, 100);  

	log3Sprite=new Log(800, 610, 20, 100);

	launcher = new Launcher(paperSprite.body, {x:200, y:400})
 

	Engine.run(engine);
 

}


function draw() {
  rectMode(CENTER);
  background(225);
  
  ground.display();
  paperSprite.display();
  dustbinSprite.display();
  launcher.display();
  log1Sprite.display();
  log2Sprite.display();
  log3Sprite.display();
  
  drawSprites();
 
}

function mouseReleased(){
    launcher.fly();
}


function mouseDragged(){
    Matter.Body.setPosition(paperSprite.body, {x: mouseX , y: mouseY});
}

