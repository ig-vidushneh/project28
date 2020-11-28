
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	boyImage=loadImage("boy.png");
	treeImage=loadImage("tree.png");
}
function setup() {
	createCanvas(800, 700);
boy=createSprite(100,600,30,30);
boy.addImage(boyImage);
boy.scale=0.09;
tree=createSprite(580,350,100,300);
tree.addImage(treeImage);
tree.scale=0.5;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
m1=new Mango(550,200,35,35);
m2=new Mango(580,120,35,35);
m3=new Mango(610,140,35,35);
m4=new Mango(640,160,35,35);
m5=new Mango(670,180,35,35);
m6=new Mango(705,200,35,35);
m7=new Mango(730,220,35,35);
m8=new Mango(760,240,35,35);
m9=new Mango(790,260,35,35);
m10=new Mango(565,280,35,35);

stoneObj=new Stone(50,580,30,30);
	Engine.run(engine);
	launcherObject=new Slingshot(stoneObj.body,{x:50,y:580})
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 m1.display();
 m2.display();
 m3.display();
 m4.display();
 m5.display();
 m6.display();
 m7.display();
 m8.display();
 m9.display();
 m10.display();
 stoneObj.display();
 launcherObject.display();
 detectollisition(stoneObj, m1);
 detectollisition(stoneObj, m2);
 detectollisition(stoneObj, m3);
 detectollisition(stoneObj, m4);
 detectollisition(stoneObj, m5);
 detectollisition(stoneObj, m6);
 detectollisition(stoneObj, m7);
 detectollisition(stoneObj, m8);
 detectollisition(stoneObj, m9);
 detectollisition(stoneObj, m10);

}
function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
	launcherObject.fly();
}

function detectollisition(lstone1, lmango1) {
	lstone = lstone1.body.position;
	lmango = lmango1.body.position;
	if (lstone.x - lmango.x < (lstone1.width + lmango1.width) / 2 && lmango.x - lstone.x < (lstone1.width + lmango1.width) / 2 && lstone.y - lmango.y < (lstone1.height + lmango1.height) / 2 && lmango.y - lstone.y < (lstone1.height + lmango1.height) / 2) {
	  Matter.Body.setStatic(lmango1.body, false);
	}
  }
