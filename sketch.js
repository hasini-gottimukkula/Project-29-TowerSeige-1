const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground, block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21;

var polygon, polygonImg;

function preload() {
    polygonImg = addImage("polygon.png");
}

function setup() {
    createCanvas(800, 400);

    engine = Engine.create()
    world = engine.world();

    ground = new Ground(170, 200, 320, 20);

    //first level 
    block1 = new Block(200, 182, 20, 20);
    block2 = new Block(220, 182, 20, 20);
    block3 = new Block(240, 182, 20, 20);
    block4 = new Block(260, 182, 20, 20);
    block5 = new Block(280, 182, 20, 20);
    block6 = new Block(300, 182, 20, 20);
    block7 = new Block(320, 2, 20, 20);

    //second level 
    block8 = new Block(201, 2, 20, 20);
    block9 = new Block(220, 2, 20, 20);
    block10 = new Block(240, 2, 20, 20);
    block11 = new Block(260, 2, 20, 20);
    block12 = new Block(280, 2, 20, 20);
    block13 = new Block(300, 2, 20, 20);
    block14 = new Block(320, 2, 20, 20);

    //third level 
    block15 = new Block(202, 2, 20, 20);
    block16 = new Block(220, 2, 20, 20);
    block17 = new Block(244, 2, 20, 20);
    block18 = new Block(265, 2, 20, 20);
    block19 = new Block(280, 2, 20, 20);
    block20 = new Block(300, 2, 20, 20);
    block21 = new Block(320, 2, 20, 20);

    polygon = new polygon(50, 200, 20);

    sling = new Slingshot(polygon.body, { x: 100, y: 200 });

    Engine.run(engine);
}

function draw() {
    background(0);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    polygon.display();
    slingshot.display();

}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
    sling.fly();
}
