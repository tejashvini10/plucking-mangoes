
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy,stone,tree,mango,ground,treeimg,boyimg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
function preload()
{
	boyimg=loadImage("boy.png");
	treeimg=loadImage("tree.png");



}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground();
	//Create the Bodies Here.
    stone=new Stone(235,420,30);
mango1=new Mango(100,460,20);
mango2=new Mango(600,300,20);
mango3=new Mango(850,330,35);
mango4=new Mango(700,200,35);
mango5=new Mango(710,320,30);
mango6=new Mango(730,200,30);
mango7=new Mango(880,220,30);
mango8=new Mango(780,250,30);
mango9=new Mango(830,180,30);
mango10=new Mango(900,200,35);

attach=new Throw(stone.body,{x:100,y:460});

tree=createSprite(1000,400);
tree.addImage(treeimg);
tree.scale=0.5;
boy=createSprite(100,600);
boy.addImage(boyimg);
boy.scale=0.2;




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  drawSprites();
 
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.rlstone.r)
{
  Matter.Body.setStatic(lmango.body,false);
}
}
function keyPressed(){
  if(keyCode===32){

    Matter.Body.setPosition(stone.body,{x:235,y:420})
    attach.Launch(stone.body);
  }
}

