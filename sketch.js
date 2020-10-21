const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var side1,side2,side3;
var ground;

function preload() {
	//side1.loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paperObject = new Paper(100,450,70);
	side1 = new Trashcan(650,590,90,10);
	//side2 = new Trashcan1(605,570,10,40);
	//side3 = new Trashcan1(695,570,10,40);

	ground =  new Ground(400,600,800,10);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);

  drawSprites();

  keyPressed();
 
  paperObject.display();
  side1.display();
  //side2.display();
  //side3.display();
  ground.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:8,y:-40});
	}
}

function drop() {
	if (keyCode === DOWN_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:-80});
	}
}