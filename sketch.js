
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;



var plane1;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;
var box21;
var box22;
var box23;
var box24;
var box25;



var chain;
var ball;






function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

  ball=new stone(1300,200);
  chain=new rope (ball.body,{x:1260,y:225},10);


	plane1=new plane (200,585);
	plane2=new plane (650,585);

	box1=new box(110,400,"pink");
	box2=new box(160,400,"pink");
	box3=new box(210,400,"pink");
    box4=new box (260,400,"pink");

	box5=new box(135,350,"blue");
	box6=new box (185,350,"blue");
	box7=new box (235,350,"blue");

	box8=new box(160,300,"yellow");
	box9=new box(210,300,"yellow");

	box10=new box (185,250,"red");

	box11=new box(550,400,"red");
	box12=new box(600,400,"red");
	box13=new box(650,400,"red");
	box14=new box(700,400,"red");
	box15=new box(750,400,"red");

	box16=new box(575,350,"yellow");
	box17=new box(625,350,"yellow");
	box18=new box(675,350,"yellow");
	box19=new box(725,350,"yellow");

	box20=new box(600,300,"blue");
	box21=new box(650,300,"blue");
	box22=new box(700,300,"blue");

	box23=new box(625,250,"pink");
	box24=new box(675,250,"pink");

	box25=new box(650,200,"orange");
	




	
   







	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  




  
  plane1.display ();
  plane2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display ();
  box10.display ();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display ();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display ();
  box23.display();
  box24.display();
  box25.display();

  ball.display();
  chain.display();
  

  drawSprites();
 
}

function mouseDragged()
{
   Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}

function mouseReleased ()
{
	chain.fly();
}


