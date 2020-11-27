
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(600,370,1200,20);
	 
	 dustbin1 = new DustBin(950,350,200,20);
	 dustbin2 = new DustBin(850,310,20,100);
	 dustbin3 = new DustBin(1050,310,20,100);

	 paper=new Paper(90,350,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
}

function keyPressed()
{
if(keyCode === UP_ARROW)
{
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}

}

